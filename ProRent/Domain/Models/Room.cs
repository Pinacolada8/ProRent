using SDK.EntityRepository.Entities;

namespace ProRent.Domain.Models {
    public class Room: Entity {
        public int Beds { get; set; }
        public double Width { get; set; }
        public double Length { get; set; }

        public long RealEstateId { get; set; }
    }
}
