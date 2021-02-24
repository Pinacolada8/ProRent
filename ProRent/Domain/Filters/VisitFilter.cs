using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProRent.Domain.Filters
{
    public class VisitFilter
    {
        public DateTimeOffset? MaxDate { get; set; }

        public DateTimeOffset? MinDate { get; set; }
    }
}
