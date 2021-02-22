﻿using System;
using System.Collections.Generic;
using ProRent.Domain.Enums;
using SDK.EntityRepository.Entities;

namespace ProRent.Domain.Models {
    public class RealEstate : Entity
    {

        public RealEstateType Type { get; set; }

        public string Name { get; set; }

        public string Address { get; set; }

        public string Neighborhood { get; set; }

        public int BedRoomQt { get; set; }

        public int SuiteQt { get; set; }

        public int LivingRoomQt { get; set; }

        public int GarageParkingSpace { get; set; }

        public double Area { get; set; }

        public bool Closet { get; set; }

        public string Description { get; set; }

        public int? Floor { get; set; }

        public double? CondominiumFee { get; set; }

        public double RentValue { get; set; }

        public bool? Doorman { get; set; }

        public virtual IEnumerable<Room> Rooms { get; set; }
    }
}
