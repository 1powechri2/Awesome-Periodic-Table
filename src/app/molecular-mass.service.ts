import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MolecularMassService {
  url = 'https://chemistry-is-awesome.herokuapp.com/api/v1/molecular_mass?molecule=C20H25N3O'

  constructor(private http: HttpClient) { }

  getMolecularMass() {
    return this.http.get(this.url);
  }
}
