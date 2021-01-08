using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace HogwartsServer.Entities
{
    public class Student
    {
        [Key]
        public int Id { get; set; }

        [StringLength (20)]
        [Required]
        public string Nombre { get; set; }

        [StringLength(20)]
        [Required]
        public string Apellido { get; set; }

        [Required]
        public int Edad { get; set; }

        [Required]
        public string Casa { get; set; }
    }
}
