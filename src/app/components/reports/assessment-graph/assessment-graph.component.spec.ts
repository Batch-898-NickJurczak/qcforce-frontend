import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentGraphComponent } from './assessment-graph.component';

describe('AssessmentGraphComponent', () => {
  let component: AssessmentGraphComponent;
  let fixture: ComponentFixture<AssessmentGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
