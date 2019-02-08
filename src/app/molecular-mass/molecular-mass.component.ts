import { Component, OnInit } from '@angular/core';
import { molecularMass } from '../molecular_mass'
import { MolecularMassService } from '../molecular-mass.service';

@Component({
  selector: 'app-molecular-mass',
  templateUrl: './molecular-mass.component.html',
  styleUrls: ['./molecular-mass.component.css']
})
export class MolecularMassComponent implements OnInit {

  mole_mass: molecularMass;

  constructor(private massService: MolecularMassService) { }

  showMass() {
    this.massService.getMolecularMass()
    .subscribe((data: molecularMass) => this.mole_mass = {
      molecule: data['molecule'],
      molecular_mass: data['molecular_mass']
    });
  }

  ngOnInit() {
    this.showMass();
    console.log(this.mole_mass)
  }

}
