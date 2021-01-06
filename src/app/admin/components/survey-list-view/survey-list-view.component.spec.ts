import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyListViewComponent } from './survey-list-view.component';

describe('SurveyListViewComponent', () => {
  let component: SurveyListViewComponent;
  let fixture: ComponentFixture<SurveyListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
