import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { StarshipsResults } from 'src/app/interfaces/starships'
import { StarwarsService } from 'src/app/service/starwars.service'

@Component({
  selector: 'app-starships-details',
  templateUrl: './starships-details.component.html',
  styleUrls: ['./starships-details.component.scss']
})
export class StarshipsDetailsComponent implements OnInit {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly starwarsService: StarwarsService
  ) {}

  starships: StarshipsResults

  ngOnInit(): void {
    this.getDetails()
  }

  getDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.starwarsService
      .getStarshipsDetails(id)
      .subscribe((res) => (this.starships = res))
  }
}
