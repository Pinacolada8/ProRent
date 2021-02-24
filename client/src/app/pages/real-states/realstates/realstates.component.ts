import { RealEstateFilter } from "./../../../shared/models/RealEstate/real-estate-filter";
import { Component, OnInit } from "@angular/core";
import {
  CustomSearchBarDefinition,
  FieldType,
} from "src/app/shared/components/custom-search-bar/models/custom-search-bar.model";
import {
  CustomTableDefinition,
  ColumnDefinition,
} from "src/app/shared/components/custom-table/models/custom-table-data.model";
import { RealEstateType } from "src/app/shared/enums/real-estate-type.enum";
import { IRealEstateViewModel } from "src/app/shared/models/RealEstate/real-estate-viewmodel.model";
import { BaseApiService } from "src/app/services/base-api.service";

@Component({
  templateUrl: "./realstates.component.html",
  styleUrls: ["./realstates.component.scss"],
})
export class RealstatesComponent implements OnInit {
  tableDefinition: CustomTableDefinition = new CustomTableDefinition({
    columnDefinitions: [
      {
        name: "type",
        displayName: "Tipo",
        allowSorting: true,
      },
      {
        name: "name",
        displayName: "Nome",
        allowSorting: true,
      },
      {
        name: "address",
        displayName: "Endereço",
        allowSorting: true,
      },
      {
        name: "area",
        displayName: "Area",
        allowSorting: true,
      },
      {
        name: "rentValue",
        displayName: "Aluguel",
        allowSorting: true,
      },
      {
        name: "bedRoomQt",
        displayName: "Quartos",
        allowSorting: true,
      },
      {
        name: "suiteQt",
        displayName: "Suites",
        allowSorting: true,
      },
      {
        name: "garageParkingSpace",
        displayName: "Garagem",
        allowSorting: true,
      },
      {
        name: "Detalhes",
        customHeaderClass: "column-small",
        customCellClass: "column-small",
        isButton: true,
        iconSvg: "eye",
        onClick: (element) => {
          console.log("Detail", element);
        },
      },
      {
        name: "Editar",
        customHeaderClass: "column-small",
        customCellClass: "column-small",
        isButton: true,
        iconSvg: "edit",
        onClick: (element) => {
          console.log("Edit", element);
        },
      },
      {
        name: "Excluir",
        customHeaderClass: "column-small",
        customCellClass: "column-small",
        isButton: true,
        iconSvg: "delete",
        onClick: (element) => {
          console.log("Delete", element);
        },
      },
    ] as ColumnDefinition[],
    paginate: true,
    frontPaginateSort: true,
  });
  values: IRealEstateViewModel[] = [];

  searchBarDefinition: CustomSearchBarDefinition = new CustomSearchBarDefinition({
    fields: [
      {
        name: "Tipo",
        type: FieldType.SELECT,
        filterName: "type",
        options: [null, RealEstateType.HOUSE, RealEstateType.APARTMENT],
        defaultValue: null,
        optionsDisplayName: (type: RealEstateType) => {
          switch (type) {
            case RealEstateType.HOUSE:
              return "Casas";
            case RealEstateType.APARTMENT:
              return "Apartamentos";
            default:
              return "Todos";
          }
        },
      },
      { name: "Nome", type: FieldType.TEXT, filterName: "name" },
      {
        name: "Area Minima",
        type: FieldType.NUMBER,
        filterName: "minArea",
        floor: 0,
      },
      {
        name: "Aluguel Maximo",
        type: FieldType.NUMBER,
        filterName: "maxRent",
        floor: 0,
      },
      { name: "Endereço", type: FieldType.TEXT, filterName: "address " },
    ],
  });
  searchBarFilter: RealEstateFilter = new RealEstateFilter();

  constructor(private api: BaseApiService) {
    api.urlPath = "/api/realestate";
  }

  refreshData() {
    this.api.getFiltered<IRealEstateViewModel>(this.searchBarFilter).subscribe(
      (data) => {
        this.values = data;
      },
      (error) => console.error(error)
    );
  }

  ngOnInit(): void {}
}
