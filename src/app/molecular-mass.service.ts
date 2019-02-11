import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MolecularMassService {
  url = 'https://chemistry-is-awesome.herokuapp.com/api/v1/molecular_mass?molecule='

  constructor(private http: HttpClient) { }

  getMolecularMass(molecule: string) {
    return this.http.get(this.url + molecule);
  }
}
