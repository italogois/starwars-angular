import { Component, OnInit } from '@angular/core'
import { transformUrlToId } from 'src/app/helpers/transformUrlToId'
import { FilmsResults } from 'src/app/interfaces/films'
import { Paginate } from 'src/app/interfaces/paginate'
import { StarwarsService } from 'src/app/service/starwars.service'

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  allFilms$: FilmsResults[]
  nextPage: string | null
  previousPage: string | null

  constructor(private readonly starwarsService: StarwarsService) {}

  ngOnInit(): void {
    this.initialData()
  }

  initialData(): void {
    this.starwarsService
      .getFilms()
      .subscribe(({ next, previous, results }: Paginate): void => {
        this.updateDataVariables({ previous, next, results })
      })
  }

  updateDataVariables(updateData: Paginate): void {
    const { previous, next, results } = updateData

    this.nextPage = next
    this.previousPage = previous
    this.allFilms$ = results
  }

  getId(url: string): number {
    return transformUrlToId(url)
  }
}
