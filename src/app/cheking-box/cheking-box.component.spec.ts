import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChekingBoxComponent } from './cheking-box.component';

describe('ChekingBoxComponent', () => {
  let component: ChekingBoxComponent;
  let fixture: ComponentFixture<ChekingBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChekingBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChekingBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
