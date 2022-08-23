import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Categories } from '../interfaces/categories'
import { Films, FilmsResults } from '../interfaces/films'
import { People, PeopleResults } from '../interfaces/people'
import { Planets, PlanetsResults } from '../interfaces/planets'

const peopleUrl = `${environment.baseUrl}/people`
const planetsUrl = `${environment.baseUrl}/planets`
const filmsUrl = `${environment.baseUrl}/films`

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {
  constructor(private readonly http: HttpClient) {}

  getAllCategories(): Observable<Categories> {
    return this.http.get<Categories>(environment.baseUrl)
  }

  getPeoples(): Observable<People> {
    return this.http.get<People>(peopleUrl)
  }

  getPeoplesDetails(id: number): Observable<PeopleResults> {
    return this.http.get<PeopleResults>(`${peopleUrl}/${id}`)
  }

  getPlanets(): Observable<Planets> {
    return this.http.get<Planets>(planetsUrl)
  }

  getPlanetsDetails(id: number): Observable<PlanetsResults> {
    return this.http.get<PlanetsResults>(`${planetsUrl}/${id}`)
  }

  getFilms(): Observable<Films> {
    return this.http.get<Films>(filmsUrl)
  }

  getFilmsDetails(id: number): Observable<FilmsResults> {
    return this.http.get<FilmsResults>(`${filmsUrl}/${id}`)
  }

  paginate(pageUrl: string): Observable<People> {
    return this.http.get<People>(pageUrl)
  }
}
