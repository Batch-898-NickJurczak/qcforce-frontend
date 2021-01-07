import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyListItemComponent } from './survey-list-item.component';

describe('SurveyListItemComponent', () => {
  let component: SurveyListItemComponent;
  let fixture: ComponentFixture<SurveyListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
