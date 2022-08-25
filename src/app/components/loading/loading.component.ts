import { Component, OnInit } from '@angular/core'
import { LoadingService } from 'src/app/service/loading.service'

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  constructor(private readonly loadingService: LoadingService) {}
  loading: boolean

  ngOnInit(): void {
    this.loadingService.loading.subscribe((res) => (this.loading = res))
  }
}
