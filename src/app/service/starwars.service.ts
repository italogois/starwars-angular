import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Categories } from '../interfaces/categories'
import { People } from '../interfaces/people'

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {
  constructor(private readonly http: HttpClient) {}

  getAllCategories(): Observable<Categories> {
    return this.http.get<Categories>(environment.baseUrl)
  }

  getPeoples(): Observable<People> {
    return this.http.get<People>(`${environment.baseUrl}/people`)
  }

  paginate(pageUrl: string): Observable<People> {
    return this.http.get<People>(pageUrl)
  }
}
