﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using DatingApp2.Entities;
namespace DatingApp2.Data
{
    public class DataContext : DbContext
    {
        public DataContext( DbContextOptions options ) : base(options)
        {

        }

        public DbSet<AppUser> Users { get; set; }
    }
}
