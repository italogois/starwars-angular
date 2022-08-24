import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Categories } from '../interfaces/categories'
import { Films, FilmsResults } from '../interfaces/films'
import { People, PeopleResults } from '../interfaces/people'
import { Planets, PlanetsResults } from '../interfaces/planets'
import { Species, SpeciesResults } from '../interfaces/species'
import { Starships, StarshipsResults } from '../interfaces/starships'
import { Vehicles, VehiclesResults } from '../interfaces/vehicles'

const peopleUrl = `${environment.baseUrl}/people`
const planetsUrl = `${environment.baseUrl}/planets`
const filmsUrl = `${environment.baseUrl}/films`
const speciesUrl = `${environment.baseUrl}/species`
const starshipsUrl = `${environment.baseUrl}/starships`
const vehiclesUrl = `${environment.baseUrl}/vehicles`

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

  getSpecies(): Observable<Species> {
    return this.http.get<Species>(speciesUrl)
  }

  getSpeciesDetails(id: number): Observable<SpeciesResults> {
    return this.http.get<SpeciesResults>(`${speciesUrl}/${id}`)
  }

  getStarships(): Observable<Starships> {
    return this.http.get<Starships>(starshipsUrl)
  }

  getStarshipsDetails(id: number): Observable<StarshipsResults> {
    return this.http.get<StarshipsResults>(`${starshipsUrl}/${id}`)
  }

  getVehicles(): Observable<Vehicles> {
    return this.http.get<Vehicles>(vehiclesUrl)
  }

  getVehiclesDetails(id: number): Observable<VehiclesResults> {
    return this.http.get<VehiclesResults>(`${vehiclesUrl}/${id}`)
  }

  paginate(pageUrl: string): Observable<People> {
    return this.http.get<People>(pageUrl)
  }
}
