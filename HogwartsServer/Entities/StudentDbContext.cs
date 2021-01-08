using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HogwartsServer.Entities
{
    public class StudentDbContext : DbContext
    {
        public DbSet<Student> Students { get; set; }

        public StudentDbContext() { }

        public StudentDbContext(DbContextOptions options) : base(options) { }
    }
}
