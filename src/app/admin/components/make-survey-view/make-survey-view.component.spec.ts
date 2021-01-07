import { DebugElement } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { MakeSurveyViewComponent } from './make-survey-view.component';

describe('MakeSurveyViewComponent', () => {
  let component: MakeSurveyViewComponent;
  let fixture: ComponentFixture<MakeSurveyViewComponent>;
  let debug: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeSurveyViewComponent ],
      providers: [{ provide: FormBuilder, useClass: FormBuilder }]

    })
    .compileComponents().then(()=>{
      fixture = TestBed.createComponent(MakeSurveyViewComponent);
      component = fixture.componentInstance;
      debug = fixture.debugElement.query(By.css('.questionsBtn'));
      element = debug.nativeElement;
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeSurveyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Tests that the getQuestions method is called when the button is clicked
  it('should call getQuestions() when clicked', fakeAsync(()=>{

    let button = fixture.debugElement.nativeElement.querySelector('.questionsBtn');
    spyOn(component, 'getQuestions');
    button.click();
    tick();

      expect(component.getQuestions).toHaveBeenCalled();
  
  }));
  
});
