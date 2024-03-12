import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://api.worldbank.org/V2/country';

  constructor(private http: HttpClient) {}

  getApiData(countryCode: any) {
    const url = `${this.apiUrl}/${countryCode}?format=json`;
    return this.http.get(url);
  }
}
