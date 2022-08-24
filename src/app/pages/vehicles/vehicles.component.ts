import { Component, OnInit } from '@angular/core'
import { transformUrlToId } from 'src/app/helpers/transformUrlToId'
import { Paginate } from 'src/app/interfaces/paginate'
import { VehiclesResults } from 'src/app/interfaces/vehicles'
import { StarwarsService } from 'src/app/service/starwars.service'

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {
  allVehicles$: VehiclesResults[]
  nextPage: string | null
  previousPage: string | null

  constructor(private readonly starwarsService: StarwarsService) {}

  ngOnInit(): void {
    this.initialData()
  }

  initialData(): void {
    this.starwarsService
      .getVehicles()
      .subscribe(({ next, previous, results }: Paginate): void => {
        this.updateDataVariables({ previous, next, results })
      })
  }

  updateDataVariables(updateData: Paginate): void {
    const { previous, next, results } = updateData

    this.nextPage = next
    this.previousPage = previous
    this.allVehicles$ = results
  }

  getId(url: string): number {
    return transformUrlToId(url)
  }
}
