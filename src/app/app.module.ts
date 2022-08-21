import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { StarwarsService } from './service/starwars.service'

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { PaginationComponent } from './components/pagination/pagination.component'
import { FilmsComponent } from './pages/films/films.component'
import { HomeComponent } from './pages/home/home.component'
import { PeopleComponent } from './pages/people/people.component'
import { PlanetsComponent } from './pages/planets/planets.component'
import { SpeciesComponent } from './pages/species/species.component'
import { StarshipsComponent } from './pages/starships/starships.component'
import { VehiclesComponent } from './pages/vehicles/vehicles.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmsComponent,
    PeopleComponent,
    PlanetsComponent,
    SpeciesComponent,
    StarshipsComponent,
    VehiclesComponent,
    PaginationComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [StarwarsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
