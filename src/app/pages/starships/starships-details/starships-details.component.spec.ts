import { ComponentFixture, TestBed } from '@angular/core/testing'

import { StarshipsDetailsComponent } from './starships-details.component'

describe('StarshipsDetailsComponent', () => {
  let component: StarshipsDetailsComponent
  let fixture: ComponentFixture<StarshipsDetailsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarshipsDetailsComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(StarshipsDetailsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
