import { Component, OnInit } from "@angular/core";
import { CustomSearchBarDefinition, FieldType } from "src/app/shared/components/custom-search-bar/models/custom-search-bar.model";
import { CustomTableDefinition, ColumnDefinition } from "src/app/shared/components/custom-table/models/custom-table-data.model";
import { RealEstateTypeToString, RealEstateType } from "src/app/shared/enums/real-estate-type.enum";
import { IRealEstateVisitViewmodel } from "src/app/shared/models/RealEstateVisits/real-estate-visit-viewmodel.model";
import { RealEstateVisitsFilter } from "src/app/shared/models/RealEstateVisits/real-estate-visits-filter";

@Component({
  templateUrl: "./real-estate-visits.component.html",
  styleUrls: ["./real-estate-visits.component.scss"],
})
export class RealEstateVisitsComponent implements OnInit {
  tableDefinition: CustomTableDefinition = new CustomTableDefinition({
    columnDefinitions: [
      {
        name: "type",
        displayName: "Tipo",
        allowSorting: true,
        getValueFunc: (visit: IRealEstateVisitViewmodel) => {
          return RealEstateTypeToString(RealEstateType[visit.type]);
        },
      },
      {
        name: "name",
        displayName: "Nome",
        allowSorting: true,
      },
      {
        name: "number",
        displayName: "Numero",
        allowSorting: true,
      },
      {
        name: "street",
        displayName: "Rua",
        allowSorting: true,
      },
      {
        name: "neighborhood",
        displayName: "Bairro",
        allowSorting: true,
      },
      {
        name: "area",
        displayName: "Area",
        allowSorting: true,
      },
      {
        name: "rentValue",
        displayName: "Alguel",
        allowSorting: true,
      },
      {
        name: "visitTime",
        displayName: "Data",
        allowSorting: true,
        getValueFunc: (visit: IRealEstateVisitViewmodel) => {
          return new Date(visit.visitTime).toLocaleString();
        },
      },
      {
        name: "Editar",
        customHeaderClass: "column-small",
        customCellClass: "column-small",
        isButton: true,
        iconSvg: "edit",
        onClick: (element: IRealEstateVisitViewmodel) => {
          // this.update(element.id);
        },
      },
      {
        name: "Excluir",
        customHeaderClass: "column-small",
        customCellClass: "column-small",
        isButton: true,
        iconSvg: "delete",
        onClick: (element: IRealEstateVisitViewmodel) => {
          // this.delete(element.id);
        },
      },
    ] as ColumnDefinition[],
    paginate: true,
    frontPaginateSort: true,
  });
  values: IRealEstateVisitViewmodel[] = [];

  searchBarDefinition: CustomSearchBarDefinition = new CustomSearchBarDefinition({
    fields: [{ name: "Data da visita", type: FieldType.DATE_RANGE, filterName: "name" }],
    addButtonHidden: false,
  });
  searchBarFilter: RealEstateVisitsFilter = {};

  constructor() {}

  ngOnInit(): void {}
}
