import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { Categories } from '../interfaces/categories'

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {
  constructor(private readonly http: HttpClient) {}

  getAllCategories(): any {
    return this.http.get<Categories>(environment.baseUrl)
  }

  getPeoples(): any {
    return this.http.get<any>(`${environment.baseUrl}/people`)
  }

  paginate(pageUrl: string): any {
    return this.http.get<any>(pageUrl)
  }
}
