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
        displayName: "Area (m<sup>2</sup>)",
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
  values: object[] = [
    //= [];
    {
      id: 0,
      matricula: 1,
      nome: "Test1",
      dataMatricula: new Date().toISOString(),
      dataNascimento: new Date().toISOString(),
    },
    {
      id: 0,
      matricula: 2,
      nome: "Test2",
      dataMatricula: new Date().toISOString(),
      dataNascimento: new Date().toISOString(),
    },
    {
      id: 0,
      matricula: 3,
      nome: "Test3",
      dataMatricula: new Date().toISOString(),
      dataNascimento: new Date().toISOString(),
    },
    {
      id: 0,
      matricula: 4,
      nome: "Test4",
      dataMatricula: new Date().toISOString(),
      dataNascimento: new Date().toISOString(),
    },
    {
      id: 0,
      matricula: 7,
      nome: "Test7",
      dataMatricula: new Date().toISOString(),
      dataNascimento: new Date().toISOString(),
    },
    {
      id: 0,
      matricula: 5,
      nome: "Test5",
      dataMatricula: new Date().toISOString(),
      dataNascimento: new Date().toISOString(),
    },
    {
      id: 0,
      matricula: 6,
      nome: "Test6",
      dataMatricula: new Date().toISOString(),
      dataNascimento: new Date().toISOString(),
    },
  ];
  searchBarDefinition: CustomSearchBarDefinition = new CustomSearchBarDefinition({
    fields: [
      {
        name: "Tipo",
        type: FieldType.SELECT,
        filterName: "type",
        options: [null, RealEstateType.HOUSE, RealEstateType.HOUSE],
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
      { name: "Endereço", type: FieldType.TEXT, filterName: "address " },
    ],
  });
  searchBarFilter: object = {};

  constructor() {}

  ngOnInit(): void {}
}
