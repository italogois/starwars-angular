import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './pages/films/films.component';
import { HomeComponent } from './pages/home/home.component';
import { PeopleComponent } from './pages/people/people.component';
import { PlanetsComponent } from './pages/planets/planets.component';
import { SpeciesComponent } from './pages/species/species.component';
import { StarshipsComponent } from './pages/starships/starships.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'planets', component: PlanetsComponent },
  { path: 'species', component: SpeciesComponent },
  { path: 'starships', component: StarshipsComponent },
  { path: 'vehicle', component: VehiclesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
