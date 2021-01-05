import { HtmlParser } from '@angular/compiler';
import { ChangeDetectorRef, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { TakeSurveyService } from '../services/take-survey.service';
import { SurveyFormComponent } from './survey-form/survey-form.component';

import { TakeSurveyComponent } from './take-survey.component';

class MockRoute {
  params: { [key: string]: string } = { token: `48n613x938nm384n2b` };
  queryParams = of(this.params);
}

class MockService {
  getSurveyForm(token: string): any {
    return ['success', null];
  }
}

describe('TakeSurveyComponent', () => {
  let initialState;
  let store;
  let component: TakeSurveyComponent;
  let fixture: ComponentFixture<TakeSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({ initialState }),
        { provide: ActivatedRoute, useClass: MockRoute },
        { provide: TakeSurveyService, useClass: MockService }
      ],
      declarations: [TakeSurveyComponent]
    }).compileComponents();
    store = TestBed.inject(MockStore);
    initialState  = {
      associateSurvey: {
        survey: null,
        loaded: false,
        loading: false,
        token: 'yugaa738279ns25vbns0mdm093n9m',
        error: '',
      },
    };
    store.setState(initialState);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeSurveyComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize token', async(() => {
    expect(component.token).toEqual(`48n613x938nm384n2b`);
  }));
});
