using DatingApp2.Data;
using DatingApp2.Entities;
using DatingApp2.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingApp2.Controllers
{
    [Authorize]
    public class UsersController : BaseApiController
    {        
        private readonly IUserRepository _userRepository;
        public UsersController( IUserRepository userRepository )
        {
            _userRepository = userRepository;
        }

        [HttpGet]        
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
        {
            return Ok(await _userRepository.GetUsersAsync());
        }

        [HttpGet("{username}")]
        public async Task<ActionResult<AppUser>> GetUser( string username )
        {
            return await _userRepository.GetUserByUsernameAsync(username);
        }
    }
}
