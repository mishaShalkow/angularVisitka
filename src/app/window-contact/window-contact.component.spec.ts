import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowContactComponent } from './window-contact.component';

describe('WindowContactComponent', () => {
  let component: WindowContactComponent;
  let fixture: ComponentFixture<WindowContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindowContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindowContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
