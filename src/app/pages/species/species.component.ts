import { Component, OnInit } from '@angular/core'
import { take } from 'rxjs'
import { transformUrlToId } from 'src/app/helpers/transformUrlToId'
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
      .pipe(take(1))
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

  getId(url: string): number {
    return transformUrlToId(url)
  }
}
