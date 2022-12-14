import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PaginationComponent } from './pagination.component'

describe('PaginationComponent', () => {
  let component: PaginationComponent
  let fixture: ComponentFixture<PaginationComponent>

  beforeEach(async(() => {
    void TestBed.configureTestingModule({
      declarations: [PaginationComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should be created', () => {
    expect(component).toBeTruthy()
  })
})
