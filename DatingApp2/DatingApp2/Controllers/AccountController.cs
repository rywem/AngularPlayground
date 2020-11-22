using DatingApp2.Data;
using DatingApp2.DTOs;
using DatingApp2.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using DatingApp2.Interfaces;

namespace DatingApp2.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly DataContext _context;
        private readonly ITokenService _tokenService;
        public AccountController(DataContext context, ITokenService tokenService)
        {
            _context = context;
            _tokenService = tokenService;
        }

        [HttpPost("register")]
        public async Task<ActionResult<UserDTO>> Register( RegisterDTO registerDto )
        {
            if ( await UserExists(registerDto.Username) )
                return BadRequest("Username is taken");

            using ( var hmac = new HMACSHA512() )
            {
                var user = new AppUser()
                {
                    UserName = registerDto.Username.ToLower(),
                    PasswwordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.Password)),
                    PasswordSalt = hmac.Key
                };
                _context.Users.Add(user);
                await _context.SaveChangesAsync();
                
                return new UserDTO()
                {
                    Username = user.UserName,
                    Token = _tokenService.CreateToken(user)
                }; ;
            }
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDTO>> Login(LoginDTO loginDto)
        {
            var user = await _context.Users.SingleOrDefaultAsync(x => x.UserName == loginDto.Username.ToLower());

            if ( user == null )
                return Unauthorized("Invalid username or password.");

            using ( var hmac = new HMACSHA512(user.PasswordSalt))
            {
                var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password));

                if ( computedHash.Length != user.PasswwordHash.Length)
                    return Unauthorized("Invalid username or password.");

                for ( int i = 0; i < computedHash.Length; i++ )
                {
                    if ( computedHash[i] != user.PasswwordHash[i] )
                        return Unauthorized("Invalid username or password.");
                }

                return new UserDTO()
                {
                    Username = user.UserName,
                    Token = _tokenService.CreateToken(user)
                };
            }
        }

        private async Task<bool> UserExists(string username)
        {
            return await _context.Users.AnyAsync(x => x.UserName.Equals(username.ToLower()));
        }
    }
}
