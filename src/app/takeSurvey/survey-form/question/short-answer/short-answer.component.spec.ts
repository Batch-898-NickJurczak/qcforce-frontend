import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { ShortAnswerComponent } from './short-answer.component';

import { fromPairs } from 'lodash';

describe('AnswersComponent', () => {
  let component: ShortAnswerComponent;
  let fixture: ComponentFixture<ShortAnswerComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortAnswerComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(ShortAnswerComponent);

      component = fixture.componentInstance;

      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
