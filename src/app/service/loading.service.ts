import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loading = new BehaviorSubject(false)

  updateLoadingState(state: boolean): void {
    this.loading.next(state)
  }
}
