import { RealEstateType } from "../../enums/real-estate-type.enum";

export class RealEstateFilter {
  type?: RealEstateType;
  name?: string;
  address?: string;
  maxArea?: number;
  minArea?: number;
  maxRentValue?: number;
  minRentValue?: number;

  public set AreaRange(filter: { max?: number; min?: number }) {
    this.maxArea = filter?.max;
    this.minArea = filter?.min;
  }

  public set RentRange(filter: { max?: number; min?: number }) {
    this.maxRentValue = filter?.max;
    this.minRentValue = filter?.min;
  }
}
