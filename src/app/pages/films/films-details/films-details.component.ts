import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { StarwarsService } from 'src/app/service/starwars.service'
import { FilmsResults } from '../../../interfaces/films'

@Component({
  selector: 'app-films-details',
  templateUrl: './films-details.component.html',
  styleUrls: ['./films-details.component.scss']
})
export class FilmsDetailsComponent implements OnInit {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly starwarsService: StarwarsService
  ) {}

  film: FilmsResults

  ngOnInit(): void {
    this.getDetails()
  }

  getDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.starwarsService
      .getFilmsDetails(id)
      .subscribe((res) => (this.film = res))
  }
}
