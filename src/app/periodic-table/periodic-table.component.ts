import { Component, OnInit } from '@angular/core';
import { Element } from '../element';
import { PeriodicTableService } from '../periodic-table.service'
@Component({
  selector: 'app-periodic-table',
  templateUrl: './periodic-table.component.html',
  styleUrls: ['./periodic-table.component.css', './element-modal.component.css', './element.component.css']
})
export class PeriodicTableComponent implements OnInit {

  elements: Element[];

  el: Element;

  hoverSwitch: Boolean = false;

  error: String;

  constructor(private periodic_service: PeriodicTableService) { }

  getElements(): void {
    this.periodic_service.getPeriodicTable()
    .subscribe(elements => {
      this.elements = elements;
    },
    error => this.error = error);
  }

  change_div(event: any): void {
    event.target.classList.add('modElement')
  }

  reset_div(event: any): void {
    event.target.classList.remove('modElement')
  }

  createModal(symbol: string): void {
    for (let element of this.elements) {
      if (element['symbol'] == symbol) {
        this.el = element;
      }
    }
    this.hoverSwitch = true;
  }

  modalClose(): void {
    this.hoverSwitch = false;
  }

  ngOnInit() {
    this.getElements();
  }

}
