using DatingApp2.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingApp2.Interfaces
{
    public interface ITokenService
    {
        string CreateToken( AppUser user );
    }
}
