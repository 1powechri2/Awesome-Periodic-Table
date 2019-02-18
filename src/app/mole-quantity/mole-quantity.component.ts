import { Component, OnInit } from '@angular/core';
import { MoleQuantityService } from '../mole-quantity.service'
import { MoleQuantity } from '../mole-quantity'

@Component({
  selector: 'app-mole-quantity',
  templateUrl: './mole-quantity.component.html',
  styleUrls: ['./mole-quantity.component.css']
})
export class MoleQuantityComponent implements OnInit {
  error: string;

  mole_quantity: MoleQuantity = undefined;

  spinner_switch: boolean = false;

  constructor(private quantityService: MoleQuantityService) { }

  showQuantity(molecule: string, weight: string) {
    this.spinner_switch = true;
    this.quantityService.getMoleQuantity(molecule, weight)
    .subscribe((data: MoleQuantity) => this.mole_quantity = {
      molecule: data['molecule'],
      molecular_mass: data['molecular_mass'],
      given_weight: data['given_weight'],
      number_of_moles: data['number_of_moles']
    },
    error => this.error = error,
    () => {this.spinner_switch = false});
  }

  ngOnInit() {
  }

}
