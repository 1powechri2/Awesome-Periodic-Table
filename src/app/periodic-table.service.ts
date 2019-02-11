import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class PeriodicTableService {
  url = 'https://chemistry-is-awesome.herokuapp.com/api/v1/periodic_table'

  constructor(private http: HttpClient) { }

  getPeriodicTable(): Observable<any> {
    return this.http.get(this.url);
  }
}
