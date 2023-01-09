import {ComponentFixture, TestBed} from '@angular/core/testing'

import {FormsBuyComponent} from './forms-buy.component'

describe('FormsBuyComponent', () => {
  let component: FormsBuyComponent
  let fixture: ComponentFixture<FormsBuyComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormsBuyComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(FormsBuyComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
