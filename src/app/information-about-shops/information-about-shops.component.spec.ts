import {ComponentFixture, TestBed} from '@angular/core/testing'

import {InformationAboutShopsComponent} from './information-about-shops.component'

describe('InformationAboutShopsComponent', () => {
  let component: InformationAboutShopsComponent
  let fixture: ComponentFixture<InformationAboutShopsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InformationAboutShopsComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(InformationAboutShopsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
