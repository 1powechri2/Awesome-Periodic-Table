import { Component, OnInit } from '@angular/core';
import { molecularMass } from '../molecular_mass'
import { MolecularMassService } from '../molecular-mass.service';

@Component({
  selector: 'app-molecular-mass',
  templateUrl: './molecular-mass.component.html',
  styleUrls: ['./molecular-mass.component.css']
})
export class MolecularMassComponent implements OnInit {

  error: string;
  
  mole_mass: molecularMass;

  constructor(private massService: MolecularMassService) { }

  showMass(molecule: string) {
    this.mole_mass = undefined;
    this.massService.getMolecularMass(molecule)
    .subscribe((data: molecularMass) => this.mole_mass = {
      molecule: data['molecule'],
      molecular_mass: data['molecular_mass']
    },
    error => this.error = error);
  }

  ngOnInit() {
    this.mole_mass = {
      molecule: 'C6H12O6',
      molecular_mass: '340.146'
    }
  }

}
