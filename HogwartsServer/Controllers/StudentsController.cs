using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HogwartsServer.Entities;

namespace HogwartsServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        private readonly StudentDbContext dbContext;

        public StudentsController(StudentDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Student>> Get()
        {
            return Ok(dbContext.Students.ToList());
        }

        [HttpPost]
        public ActionResult Post([FromBody] Student student)
        {
            if (student == null) return NotFound();
            else
            {
                if ((student.Casa != "Griffyndor") || (student.Casa != "Hufflepuff") || (student.Casa != "Ravenclaw") || (student.Casa != "Slytherin"))
                {
                    return BadRequest();
                }
                else
                {
                    dbContext.Students.Add(student);
                    dbContext.SaveChanges();
                }
            }
            
            return Ok();
        }

        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Student student)
        {
            if (id != student.Id)
            {
                return BadRequest();
            }

            if ((student.Casa != "Griffyndor") || (student.Casa != "Hufflepuff") || (student.Casa != "Ravenclaw") || (student.Casa != "Slytherin"))
            {
                return BadRequest();
            }
            else
            {
                dbContext.Entry(student).State = EntityState.Modified;

                try
                {
                    dbContext.SaveChanges();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!StudentExists(id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
            }
            return Ok();
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var student = dbContext.Students.Find(id);
            if(student == null)
            {
                return NotFound();
            }

            dbContext.Students.Remove(student);
            dbContext.SaveChanges();

            return Ok();
        }

        private bool StudentExists(int id)
        {
            return dbContext.Students.Any(e => e.Id == id);
        }
    }
}
