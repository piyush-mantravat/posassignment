import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductservicesService {

  constructor(public http: HttpClient) { }

   public getData() {
    return this.http.get('/assets/product.json');
  }  
}
