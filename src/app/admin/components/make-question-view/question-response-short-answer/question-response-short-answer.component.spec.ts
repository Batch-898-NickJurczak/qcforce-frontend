import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

import { QuestionResponseShortAnswerComponent } from "./question-response-short-answer.component";
import { ReactiveFormsModule } from "@angular/forms";

describe("QuestionResponseShortAnswerComponent", () => {
  let component: QuestionResponseShortAnswerComponent;
  let fixture: ComponentFixture<QuestionResponseShortAnswerComponent>;
  let submitEl;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionResponseShortAnswerComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionResponseShortAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    submitEl = fixture.debugElement;
  });
  //Tests question-response-short-answer component exists
  it("should create", () => {
    expect(component).toBeTruthy();
  });

  //Tests question-response-short-answer component has a text area
  it("should have a text area for short answer"),
    () => {
      expect(fixture.nativeElement.querySelector("#shortAnswer").toBeTruthy());
    };

  //Tests question-response-short-answer component has a add choice button

  it("should have a button to add a choice"),
    () => {
      expect(fixture.nativeElement.querySelector("#addChoice").toBeTruthy());
    };

  //Tests question-response-short-answer component has a submit area

  it("should have a submit button"),
    () => {
      expect(fixture.nativeElement.querySelector("#submitButton").toBeTruthy());
    };

  //Tests question-response-short-answer component submission is valid when
  //submit question is clicked

  it("should have valid input when submit button is clicked"),
    () => {
      fixture.detectChanges();
      const button = fixture.debugElement.query(By.css("#submitButton"));
      expect(button.nativeElement.disabled).toBeTruthy();
    };
  // Test question-response-short-answer component enables submit button
  // When Text area is not empty
  it("should enable submit button when textArea is not empty", () => {
    fixture.nativeElement.query("#question").innerText = "I love this test";
    fixture.detectChanges();
    expect(
      submitEl.nativeElement.querySelector("#submitButton").disabled.toBeFalsy()
    );
  });
});
