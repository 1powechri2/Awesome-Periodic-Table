import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoleQuantityService {
  url: String;

  constructor() { private http: HttpClient}

  getMoleQuantity(molecule: String, weight: String) {
    url = `https://chemistry-is-awesome.herokuapp.com/api/v1/molecular_quantity?molecule=${molecule}weight=7${weight}`
    return this.http.get(this.url + molecule);
  }
}
