import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { FilmsComponent } from './pages/films/films.component'
import { HomeComponent } from './pages/home/home.component'
import { PeopleDetailsComponent } from './pages/people/people-details/people-details.component'
import { PeopleComponent } from './pages/people/people.component'
import { PlanetsDetailsComponent } from './pages/planets/planets-details/planets-details.component'
import { PlanetsComponent } from './pages/planets/planets.component'
import { SpeciesComponent } from './pages/species/species.component'
import { StarshipsComponent } from './pages/starships/starships.component'
import { VehiclesComponent } from './pages/vehicles/vehicles.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'films', component: FilmsComponent },
  {
    path: 'people',
    children: [
      {
        path: ':id',
        component: PeopleDetailsComponent
      },
      { path: '', component: PeopleComponent, pathMatch: 'full' }
    ]
  },
  {
    path: 'planets',
    children: [
      {
        path: ':id',
        component: PlanetsDetailsComponent
      },
      { path: '', component: PlanetsComponent, pathMatch: 'full' }
    ]
  },
  { path: 'species', component: SpeciesComponent },
  { path: 'starships', component: StarshipsComponent },
  { path: 'vehicle', component: VehiclesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
