import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeriodicTableService {
  url = 'https://chemistry-is-awesome.herokuapp.com/api/v1/periodic_table'

  constructor(private http: HttpClient) { }

  getPeriodicTable() {
    return this.http.get(this.url);
  }
}
