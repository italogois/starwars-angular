import { Component, OnInit } from '@angular/core'
import { take } from 'rxjs'
import { transformUrlToId } from 'src/app/helpers/transformUrlToId'
import { Paginate } from 'src/app/interfaces/paginate'
import { StarshipsResults } from 'src/app/interfaces/starships'
import { StarwarsService } from 'src/app/service/starwars.service'

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {
  allStarships$: StarshipsResults[]
  nextPage: string | null
  previousPage: string | null

  constructor(private readonly starwarsService: StarwarsService) {}

  ngOnInit(): void {
    this.initialData()
  }

  initialData(): void {
    this.starwarsService
      .getStarships()
      .pipe(take(1))
      .subscribe(({ next, previous, results }: Paginate): void => {
        this.updateDataVariables({ previous, next, results })
      })
  }

  updateDataVariables(updateData: Paginate): void {
    const { previous, next, results } = updateData

    this.nextPage = next
    this.previousPage = previous
    this.allStarships$ = results
  }

  getId(url: string): number {
    return transformUrlToId(url)
  }
}
