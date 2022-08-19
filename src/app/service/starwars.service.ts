import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Categories } from '../interfaces/categories';

@Injectable({
  providedIn: 'root',
})
export class StarwarsService {
  constructor(private http: HttpClient) {}

  getAllCategories() {
    return this.http.get<Categories>(environment.baseUrl);
  }
}
