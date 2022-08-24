import { Component, OnInit } from '@angular/core'
import { Paginate } from 'src/app/interfaces/paginate'
import { SpeciesResults } from 'src/app/interfaces/species'
import { StarwarsService } from 'src/app/service/starwars.service'

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {
  allSpecies$: SpeciesResults[]
  nextPage: string | null
  previousPage: string | null

  constructor(private readonly starwarsService: StarwarsService) {}

  ngOnInit(): void {
    this.initialData()
  }

  initialData(): void {
    this.starwarsService
      .getSpecies()
      .subscribe(({ next, previous, results }: Paginate): void => {
        this.updateDataVariables({ previous, next, results })
      })
  }

  updateDataVariables(updateData: Paginate): void {
    const { previous, next, results } = updateData

    this.nextPage = next
    this.previousPage = previous
    this.allSpecies$ = results
  }
}
