using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProRent.DataAccess;
using ProRent.Domain.Models;
using SDK.EntityRepository;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ProRent.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RealEstateController : ControllerBase
    {
        private readonly EntityRepository<RealEstate> _realEstateRepository;

        public RealEstateController(EntityRepository<RealEstate> realEstateRepository)
        {
            _realEstateRepository = realEstateRepository;
        }

        // GET: api/<RealEstateController>
        [HttpGet]
        public async Task<IEnumerable<RealEstate>> Get()
        {
            var realStates = await _realEstateRepository.FindAll(x => x.Id >= 9);

            return realStates;
        }

        [HttpGet("TEST2")]
        public async Task<dynamic> Get2() {
            var realStates = await _realEstateRepository.FindAllIncluding(x => x.Id >= 9, x => x.Rooms);

            return realStates;
        }

        // GET api/<RealEstateController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        [HttpGet("test/{id}")]
        public dynamic Get1([FromRoute] int id, [FromQuery] int max, [FromQuery] int min)
        {
            return new { max, min };
        }

        // POST api/<RealEstateController>
        [HttpPost]
        public void Post([FromBody] string value)
        { }

        // PUT api/<RealEstateController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        { }

        // DELETE api/<RealEstateController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        { }
    }
}