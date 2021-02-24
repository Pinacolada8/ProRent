import { RealEstateType } from 'src/app/shared/enums/real-estate-type.enum';
export class RealEstateDTO {
  Type: RealEstateType = RealEstateType.HOUSE;
  Name: string;
  Number: number;
  Street: string;
  Neighborhood: string;
  City: string;
  State: string;
  Country: string;
  BedRoomQt: number;
  SuiteQt: number;
  LivingRoomQt: number;
  GarageParkingSpace: number;
  Area: number;
  Closet: boolean = false;
  Description?: string;
  Floor?: number;
  CondominiumFee?: number;
  RentValue: number;
  Doorman?: boolean;

  constructor(obj: Partial<RealEstateDTO> = {}) {
    for (const prop of Object.keys(obj)) {
      this[prop] = obj[prop];
    }
  }
}
