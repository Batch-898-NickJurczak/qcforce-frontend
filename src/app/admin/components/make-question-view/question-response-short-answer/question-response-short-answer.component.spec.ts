import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { QuestionResponseShortAnswerComponent } from "./question-response-short-answer.component";

describe("QuestionResponseShortAnswerComponent", () => {
  let component: QuestionResponseShortAnswerComponent;
  let fixture: ComponentFixture<QuestionResponseShortAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionResponseShortAnswerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionResponseShortAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have a textbox for short answer"),
    () => {
      expect(fixture.nativeElement.querySelector("#shortAnswer").toBeTruthy());
    };

  it("should have a button to add a choice"),
    () => {
      expect(fixture.nativeElement.querySelector("#addChoice").toBeTruthy());
    };

  it("should have a submit button"),
    () => {
      expect(fixture.nativeElement.querySelector("#submit").toBeTruthy());
    };

  it("should have valid input when submit button is clicked"),
    () => {
      fixture.detectChanges();
      const button = fixture.debugElement.query(By.css("#submitButton"));
      expect(button.nativeElement.disabled).toBeTruthy();
    };

  it("should enable button when textArea is not empty", () => {
    fixture.nativeElement.query("#inputQuestion").innerText =
      "I love this test";
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
    expect(button.nativeElement.disabled).toBeFalsy();
  });
});
