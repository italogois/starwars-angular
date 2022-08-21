import { Component, OnInit } from '@angular/core';
import { Paginate } from 'src/app/interfaces/paginate';
import { StarwarsService } from 'src/app/service/starwars.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {
  allPeoples$: any;
  nextPage: string | null;
  previousPage: string | null;

  constructor(private starwarsService: StarwarsService) {}

  ngOnInit(): void {
    this.initialData();
  }

  initialData() {
    this.starwarsService
      .getPeoples()
      .subscribe(({ next, previous, results }) => {
        console.log(results);
        this.updateDataVariables({ previous, next, results });
      });
  }

  updateDataVariables(updateData: Paginate): void {
    const { previous, next, results } = updateData;

    console.log(updateData);

    this.nextPage = next;
    this.previousPage = previous;
    this.allPeoples$ = results;
  }
}
