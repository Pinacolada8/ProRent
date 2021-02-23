using ProRent.Domain.Enums;

namespace ProRent.Domain.Filters
{
    public class RealEstateFilter
    {
        public RealEstateType? Type { get; set; }

        public string Name { get; set; }

        public string Address { get; set; }

        public double? MaxArea { get; set; }

        public double? MinArea { get; set; }

        public double? MaxRentValue { get; set; }

        public double? MinRentValue { get; set; }

        public double? MaxCondoFee { get; set; }

        public double? MinCondoFee { get; set; }
    }
}
