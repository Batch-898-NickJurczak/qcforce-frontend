import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeSurveyViewComponent } from './make-survey-view.component';

describe('MakeSurveyViewComponent', () => {
  let component: MakeSurveyViewComponent;
  let fixture: ComponentFixture<MakeSurveyViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeSurveyViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeSurveyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
