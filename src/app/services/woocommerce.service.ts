import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WoocommerceService {
  private apiUrl = 'http://localhost/wp_blog/wp-json/wc/v3/products';

  constructor(private http: HttpClient) {}

  getProducts() {
    const username = 'root';
    const password = 'kbDx txkU XECZ YGWU 18eD 0oXn'; 

    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(`${username}:${password}`) // ← space added
    });

    return this.http.get(this.apiUrl, { headers });
  }
}
