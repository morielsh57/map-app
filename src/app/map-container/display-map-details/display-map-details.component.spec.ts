import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMapDetailsComponent } from './display-map-details.component';

describe('DisplayMapDetailsComponent', () => {
  let component: DisplayMapDetailsComponent;
  let fixture: ComponentFixture<DisplayMapDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayMapDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMapDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
