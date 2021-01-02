using AutoMapper;
using DatingApp2.Data;
using DatingApp2.DTOs;
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
        private readonly IMapper _mapper;
        public UsersController( IUserRepository userRepository, IMapper mapper )
        {
            _userRepository = userRepository;
            _mapper = mapper;
        }

        [HttpGet]        
        public async Task<ActionResult<IEnumerable<MemberDTO>>> GetUsers()
        {
            return Ok(await _userRepository.GetMembersAsync());
        }

        [HttpGet("{username}")]
        public async Task<ActionResult<MemberDTO>> GetUser( string username )
        {
            return await _userRepository.GetMemberAsync(username);
        }
    }
}
