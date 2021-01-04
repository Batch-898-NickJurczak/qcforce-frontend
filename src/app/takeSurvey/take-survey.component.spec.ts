import { HtmlParser } from '@angular/compiler';
import { ChangeDetectorRef, DebugElement } from '@angular/core';
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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ActivatedRoute, useClass: MockRoute },
        { provide: TakeSurveyService, useClass: MockService }
      ],
      declarations: [TakeSurveyComponent]
    }).compileComponents();
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

  it('should display success element if status = success', () => {
    fixture.componentInstance.status = 'success';
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#success'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('#failure'))).toBeNull();
    expect(fixture.debugElement.query(By.css('#completed'))).toBeNull();
    expect(fixture.debugElement.query(By.css('#default'))).toBeNull();
  });

  it('should display failure element if status = failure', () => {
    fixture.componentInstance.status = 'failure';
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#failure'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('#success'))).toBeNull();
    expect(fixture.debugElement.query(By.css('#completed'))).toBeNull();
    expect(fixture.debugElement.query(By.css('#default'))).toBeNull();
  });

  it('should display completed element if status = completed', () => {
    fixture.componentInstance.status = 'completed';
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#completed'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('#success'))).toBeNull();
    expect(fixture.debugElement.query(By.css('#failure'))).toBeNull();
    expect(fixture.debugElement.query(By.css('#default'))).toBeNull();
  });

  it('should display default element if status != success | failure | completed', () => {
    fixture.componentInstance.status = '';
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#default'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('#success'))).toBeNull();
    expect(fixture.debugElement.query(By.css('#failure'))).toBeNull();
    expect(fixture.debugElement.query(By.css('#completed'))).toBeNull();
  });
});
