using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProRent.Domain.Filters;
using ProRent.Domain.Models;
using SDK.EntityRepository;

namespace ProRent.DataAccess.EntityRepositoryExtensions
{
    public static class VisitExtension
    {
        public static async Task<IEnumerable<Visit>> Filter(this IEntityRepository<Visit> repository,
            VisitFilter filter)
        {
            var context = repository.GetContext().Set<Visit>();
            var query = context.Include(x => x.RealEstate).AsQueryable();

            if (filter.MaxDate.HasValue)
                query = query.Where(x => x.VisitTime <= filter.MaxDate);

            if (filter.MinDate.HasValue)
                query = query.Where(x => x.VisitTime >= filter.MinDate);

            return await query.ToListAsync();
        }
    }
}
