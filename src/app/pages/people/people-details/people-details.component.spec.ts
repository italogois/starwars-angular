import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PeopleDetailsComponent } from './people-details.component'

describe('PeopleDetailsComponent', () => {
  let component: PeopleDetailsComponent
  let fixture: ComponentFixture<PeopleDetailsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeopleDetailsComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(PeopleDetailsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
