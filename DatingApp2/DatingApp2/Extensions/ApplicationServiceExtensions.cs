﻿using DatingApp2.Data;
using DatingApp2.Interfaces;
using DatingApp2.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingApp2.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices( this IServiceCollection services, IConfiguration config )
        {
            services.AddScoped<ITokenService, TokenService>();
            services.AddDbContext<Data.DataContext>(options =>
            {
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"));
            });

            return services;
        }
    }
}
