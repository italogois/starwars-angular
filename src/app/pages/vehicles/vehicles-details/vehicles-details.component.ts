import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { VehiclesResults } from 'src/app/interfaces/vehicles'
import { StarwarsService } from 'src/app/service/starwars.service'

@Component({
  selector: 'app-vehicles-details',
  templateUrl: './vehicles-details.component.html',
  styleUrls: ['./vehicles-details.component.scss']
})
export class VehiclesDetailsComponent implements OnInit {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly starwarsService: StarwarsService
  ) {}

  vehicles: VehiclesResults

  ngOnInit(): void {
    this.getDetails()
  }

  getDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.starwarsService
      .getVehiclesDetails(id)
      .subscribe((res) => (this.vehicles = res))
  }
}
