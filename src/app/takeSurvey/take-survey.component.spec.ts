import { HtmlParser } from '@angular/compiler';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
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
  let component: TakeSurveyComponent;
  let fixture: ComponentFixture<TakeSurveyComponent>;
  let HTMLElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ActivatedRoute, useClass: MockRoute },
        { provide: TakeSurveyService, useClass: MockService }
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize token', async(() => {
    expect(component.token).toEqual(`48n613x938nm384n2b`);
  }));

  it('should display app-survey-form', () => {
    fixture.detectChanges();
    const printOut = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(printOut.textContent).toEqual('take-survey success!');
  });

  it('should not display app-survey-form', () => {
    component.status = 'failure';
    fixture.detectChanges();
    const printOut = fixture.debugElement.query(By.css('span')).nativeElement;
    expect(printOut.textContent).toEqual('take-survey works!');
  });
});
