import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingGraphComponent } from './rating-graph.component';

describe('RatingGraphComponent', () => {
  let component: RatingGraphComponent;
  let fixture: ComponentFixture<RatingGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
