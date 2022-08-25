import { Component, EventEmitter, Input, Output } from '@angular/core'
import { take } from 'rxjs'
import { Paginate } from 'src/app/interfaces/paginate'
import { StarwarsService } from 'src/app/service/starwars.service'

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() previousPage: string | null
  @Input() nextPage: string | null
  @Output() paginationData = new EventEmitter<Paginate>()

  constructor(private readonly starwarsService: StarwarsService) {}

  paginate(pageUrl: string | null): void {
    if (pageUrl == null) return

    this.starwarsService
      .paginate(pageUrl)
      .pipe(take(1))
      .subscribe(({ next, previous, results }: Paginate) => {
        this.paginationData.emit({
          previous,
          next,
          results
        })
      })
  }
}
