import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorScreenComponent } from './major-screen.component';

describe('MajorScreenComponent', () => {
  let component: MajorScreenComponent;
  let fixture: ComponentFixture<MajorScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MajorScreenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MajorScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
