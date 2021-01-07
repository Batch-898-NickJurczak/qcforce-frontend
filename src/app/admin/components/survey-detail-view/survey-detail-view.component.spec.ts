import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyDetailViewComponent } from './survey-detail-view.component';

describe('SurveyDetailViewComponent', () => {
  let component: SurveyDetailViewComponent;
  let fixture: ComponentFixture<SurveyDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
