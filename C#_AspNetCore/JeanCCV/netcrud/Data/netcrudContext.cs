using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using mycrud.Models;

namespace netcrud.Models
{
    public class netcrudContext : DbContext
    {
        public netcrudContext (DbContextOptions<netcrudContext> options)
            : base(options)
        {
        }

        public DbSet<mycrud.Models.Person> Person { get; set; }
    }
}
