import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private_jsonUrl = 'assets/DATA/products.json'
  constructor(private http: HttpClient) { }
  getJson():Observable<any>{

    return this.http.get(this.private_jsonUrl)
  }
}
