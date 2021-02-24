import { RealEstateType } from "../../enums/real-estate-type.enum";

export interface IRealEstateViewModel {
  type: RealEstateType;
  name: string;
  address: string;
  bedRoomQt: number;
  suiteQt: number;
  garageParkingSpace: number;
  area: number;
  rentValue: number;
}
