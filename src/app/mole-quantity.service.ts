import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoleQuantityService {
  url: string;

  constructor(private http: HttpClient) {}

  getMoleQuantity(molecule: string, weight: string) {
    this.url = `https://chemistry-is-awesome.herokuapp.com/api/v1/molecular_quantity?molecule=${molecule}&weight=7${weight}`
    return this.http.get(this.url);
  }
}
