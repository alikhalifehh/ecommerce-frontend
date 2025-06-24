import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WoocommerceService {
  private apiUrl='http://localhost/wp_blog/wp-json/wc/v3/products';
  private consumerKey='ck_8199a20eebb8cd3e35aa5714f4c44847b282f046'; 
  private consumerSecret='cs_9408976c6dc853d495b4ecaa5c731d899ce16c3c'; 

  constructor(private http: HttpClient) {}

  getProducts() {
    const authParams=`?consumer_key=${this.consumerKey}&consumer_secret=${this.consumerSecret}`;
    return this.http.get(`${this.apiUrl}${authParams}`);
  }
}
