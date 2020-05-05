using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPIDevCode.Data;
using WebAPIDevCode.Models;

namespace WebAPIDevCode.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private ApplicationContext _context;
        public MovieController(ApplicationContext context)
        {
            _context = context;
        }
        // GET api/movie
        [HttpGet]
        public IActionResult Get()
        {
            // Retrieve all movies from db logic

            var movieList = _context.Movies.ToList();
            return Ok(movieList);
        }

        // GET api/movie/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            // Retrieve movie by id from db logic
            // return Ok(movie);
            Movie movie = _context.Movies.Where(a => a.MovieId == id).FirstOrDefault();
            return Ok(movie);
        }

        // POST api/movie
        [HttpPost]
        public IActionResult Post([FromBody]Movie value)
        {
            _context.Movies.Add(value);
            _context.SaveChanges();
            return Ok(value);
        }

        // PUT api/movie
        [HttpPut]
        public IActionResult Put([FromBody] Movie movie)
        {
            // Update movie in db logic
            var movieToUpdate = _context.Movies.Single(a => a.MovieId == movie.MovieId);
            movieToUpdate.Title = movie.Title;
            movieToUpdate.Genre = movie.Genre;
            movieToUpdate.Director = movie.Director;
            movieToUpdate.Url = movie.Url;
            _context.SaveChanges();
            return Ok(movieToUpdate);
        }

        // DELETE api/movie/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Movie movie = _context.Movies.Where(m => m.MovieId == id).SingleOrDefault();
            _context.Remove(movie);
            _context.SaveChanges();
            // Delete movie from db logic
            return Ok();
        }
    }
}