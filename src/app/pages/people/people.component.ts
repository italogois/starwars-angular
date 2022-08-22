import { Component, OnInit } from '@angular/core'
import { Paginate } from 'src/app/interfaces/paginate'
import { StarwarsService } from 'src/app/service/starwars.service'
import { PeopleResults } from './../../interfaces/people'

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  allPeoples$: PeopleResults[]
  nextPage: string | null
  previousPage: string | null

  constructor(private readonly starwarsService: StarwarsService) {}

  ngOnInit(): void {
    this.initialData()
  }

  initialData(): void {
    this.starwarsService
      .getPeoples()
      .subscribe(({ next, previous, results }: Paginate): void => {
        console.log(results)
        this.updateDataVariables({ previous, next, results })
      })
  }

  updateDataVariables(updateData: Paginate): void {
    const { previous, next, results } = updateData

    console.log(updateData)

    this.nextPage = next
    this.previousPage = previous
    this.allPeoples$ = results
  }
}
