import { RealEstateTypeToString } from "src/app/shared/enums/real-estate-type.enum";
import { RealEstateType } from "src/app/shared/enums/real-estate-type.enum";
import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { RealEstateModal } from "../models/real-estate-modal";

@Component({
  templateUrl: "./new-real-estate.component.html",
  styleUrls: ["./new-real-estate.component.scss"],
})
export class NewRealEstateComponent implements OnInit {
  ApartmentRealEstateType = RealEstateType.APARTMENT;
  RealEstateTypes: { value: RealEstateType; displayName: string }[] = [];

  constructor(
    private modalRef: MatDialogRef<NewRealEstateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RealEstateModal
  ) {
    this.RealEstateTypes = Object.values(RealEstateType)
      .filter((x) => !isNaN(<number>x))
      .map((x: RealEstateType) => {
        return { value: x, displayName: RealEstateTypeToString(x) };
      });
  }

  ngOnInit(): void {}

  close() {
    this.modalRef.close();
  }

  save() {
    this.modalRef.close(this.data.realEstate);
  }
}
