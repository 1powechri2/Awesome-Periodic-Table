import { Component, OnInit } from '@angular/core';
import { Element } from '../element';
import { PeriodicTableService } from '../periodic-table.service'
@Component({
  selector: 'app-periodic-table',
  templateUrl: './periodic-table.component.html',
  styleUrls: ['./periodic-table.component.css']
})
export class PeriodicTableComponent implements OnInit {

  elements: Element[];
  
  error: string;

  constructor(private periodic_service: PeriodicTableService) { }

  getElements(): void {
    this.periodic_service.getPeriodicTable()
    .subscribe(elements => {
      this.elements = elements;
    },
    error => this.error = error);
  }

  ngOnInit() {
    this.getElements();
  }

}
