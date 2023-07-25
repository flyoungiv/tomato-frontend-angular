import { Component } from '@angular/core';

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


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tomato-frontend-angular';
  displayedColumns: string[] = ['country_code', 'country', 'medals'];
  dataSource = ELEMENT_DATA;
}
