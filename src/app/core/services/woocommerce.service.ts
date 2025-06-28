import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WoocommerceService {
  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    const url = `${this.apiUrl}/posts`;
    return this.http.get(url);
  }
}
