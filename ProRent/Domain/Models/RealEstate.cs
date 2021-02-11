using System.Collections.Generic;
using SDK.EntityRepository.Entities;

namespace ProRent.Domain.Models {
    public class RealEstate : Entity
    {
        public string Address { get; set; }

        public string Neighborhood { get; set; }

        public virtual IEnumerable<Room> Rooms { get; set; }
    }
}
