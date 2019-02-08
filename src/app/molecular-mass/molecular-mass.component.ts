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

  showLoader() {
    console.log('Show loader');
  };
  hideLoader(){
    console.log('Hide loader');
  };

  constructor(private massService: MolecularMassService) { }

  showMass() {
    this.massService.getMolecularMass()
    .subscribe((data: molecularMass) => this.mole_mass = {
      molecule: data['molecule'],
      molecular_mass: data['molecular_mass']
    },
    error => this.error = error);
  }

  ngOnInit() {
    this.showMass();
  }

}
