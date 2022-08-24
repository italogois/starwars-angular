import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoadingComponent } from './components/loading/loading.component'
import { PaginationComponent } from './components/pagination/pagination.component'
import { FilmsDetailsComponent } from './pages/films/films-details/films-details.component'
import { FilmsComponent } from './pages/films/films.component'
import { HomeComponent } from './pages/home/home.component'
import { PeopleDetailsComponent } from './pages/people/people-details/people-details.component'
import { PeopleComponent } from './pages/people/people.component'
import { PlanetsDetailsComponent } from './pages/planets/planets-details/planets-details.component'
import { PlanetsComponent } from './pages/planets/planets.component'
import { SpeciesDetailsComponent } from './pages/species/species-details/species-details.component'
import { SpeciesComponent } from './pages/species/species.component'
import { StarshipsDetailsComponent } from './pages/starships/starships-details/starships-details.component'
import { StarshipsComponent } from './pages/starships/starships.component'
import { VehiclesDetailsComponent } from './pages/vehicles/vehicles-details/vehicles-details.component'
import { VehiclesComponent } from './pages/vehicles/vehicles.component'
import { StarwarsService } from './service/starwars.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmsComponent,
    FilmsDetailsComponent,
    PeopleComponent,
    PlanetsComponent,
    PlanetsDetailsComponent,
    SpeciesComponent,
    SpeciesDetailsComponent,
    StarshipsComponent,
    StarshipsDetailsComponent,
    VehiclesComponent,
    VehiclesDetailsComponent,
    PaginationComponent,
    PeopleDetailsComponent,
    LoadingComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [StarwarsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
