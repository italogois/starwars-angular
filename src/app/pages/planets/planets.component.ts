import { Component, OnInit } from '@angular/core'
import { Paginate } from 'src/app/interfaces/paginate'
import { PlanetsResults } from 'src/app/interfaces/planets'
import { StarwarsService } from 'src/app/service/starwars.service'

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  allPlanets$: PlanetsResults[]
  nextPage: string | null
  previousPage: string | null

  constructor(private readonly starwarsService: StarwarsService) {}

  ngOnInit(): void {
    this.initialData()
  }

  initialData(): void {
    this.starwarsService
      .getPlanets()
      .subscribe(({ next, previous, results }: Paginate): void => {
        this.updateDataVariables({ previous, next, results })
      })
  }

  updateDataVariables(updateData: Paginate): void {
    const { previous, next, results } = updateData

    this.nextPage = next
    this.previousPage = previous
    this.allPlanets$ = results
  }
}
