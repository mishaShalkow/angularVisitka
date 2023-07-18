import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalBoxComponent } from './personal-box.component';

describe('PersonalBoxComponent', () => {
  let component: PersonalBoxComponent;
  let fixture: ComponentFixture<PersonalBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
