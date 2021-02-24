import { RealEstateType } from "../../enums/real-estate-type.enum";

export interface IRealEstateViewModel {
  type: string;
  name: string;
  address: string;
  bedRoomQt: number;
  suiteQt: number;
  garageParkingSpace: number;
  area: number;
  rentValue: number;
}
