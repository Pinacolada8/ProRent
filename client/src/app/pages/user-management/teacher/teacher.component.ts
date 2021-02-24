import { Component, OnInit } from "@angular/core";
import { BaseApiService } from 'src/app/services/base-api.service';
import { CustomSearchBarDefinition, FieldType } from 'src/app/shared/components/custom-search-bar/models/custom-search-bar.model';
import { CustomTableDefinition, ColumnDefinition } from 'src/app/shared/components/custom-table/models/custom-table-data.model';
import { TeacherFilter } from '../models/teacher-filter.model';
import { Teacher } from '../models/teacher.model';

@Component({
  selector: "app-teacher",
  templateUrl: "./teacher.component.html",
  styleUrls: ["./teacher.component.scss"],
})
export class TeacherComponent implements OnInit {
  tableDefinition: CustomTableDefinition = new CustomTableDefinition({
    columnDefinitions: [
      {
        name: "id",
        displayName: "Registro",
        allowSorting: true,
      },
      {
        name: "nome",
        displayName: "Nome",
        allowSorting: true,
      },
      {
        name: "dataDeNascimento",
        displayName: "Data de Nascimento",
        allowSorting: true,
        getValueFunc: (obj: Teacher) => {
          return new Date(obj.dataNascimento).toLocaleString();
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
  values: Teacher[] = [];
  searchBarDefinition: CustomSearchBarDefinition = new CustomSearchBarDefinition({
    fields: [
      { name: "Registro", type: FieldType.TEXT, filterName: "id" },
      {
        name: "Data de Nascimento",
        type: FieldType.DATE_RANGE,
        filterName: "nascimentoDateRange",
        defaultValue: [
          new Date(new Date().getFullYear() - 100, 1),
          new Date(new Date().getFullYear() + 100, 1),
        ],
      },
    ],
  });
  searchBarFilter: TeacherFilter = {};

  constructor(private api: BaseApiService) {
    api.urlPath = "/api/v1/professor";
  }

  getData() {
    this.api.getFiltered<Teacher>(this.searchBarFilter).subscribe(
      (data) => {
        this.values = data;
      },
      (error) => console.error(error)
    );
  }

  ngOnInit() {
    this.getData();
  }
}
