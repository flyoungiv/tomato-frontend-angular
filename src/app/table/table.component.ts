import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface OlympicCountry {
    country_code: string;
    country: string;
    medals: number;
  }
  
  const ELEMENT_DATA: OlympicCountry[] = [
      {
        country: "Algeria",
        country_code: "DZA",
        medals: 248
      },
      {
        country: "Argentina",
        country_code: "ARG",
        medals: 4278
      },
      {
        country: "Armenia",
        country_code: "ARM",
        medals: 310
      },
      {
        country: "Australia",
        country_code: "AUS",
        medals: 20274
      },
      {
        country: "Austria",
        country_code: "AUT",
        medals: 2232
      },
  ];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic',
  styleUrls: ['./table.component.css'],
  templateUrl: './table.component.html',
  standalone: true,
  imports: [MatTableModule],
})

export class TableBasic {
  displayedColumns: string[] = ['country_code', 'country', 'medals'];
  dataSource = ELEMENT_DATA;
}