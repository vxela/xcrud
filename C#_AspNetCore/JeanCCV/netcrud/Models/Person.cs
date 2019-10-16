using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace mycrud.Models
{
    public class Person
    {        
        [Key]
        public string Id { get; set; }
        public string Name { get; set; }
        public string Lastname { get; set; }
        public int Phone { get; set; }
        public int Age { get; set; }
    }
}
