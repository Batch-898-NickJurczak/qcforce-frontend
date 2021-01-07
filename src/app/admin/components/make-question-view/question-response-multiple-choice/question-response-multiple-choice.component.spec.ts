import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { QuestionResponseMultipleChoiceComponent } from "./question-response-multiple-choice.component";

describe("QuestionResponseMultipleChoiceComponent", () => {
  let component: QuestionResponseMultipleChoiceComponent;
  let fixture: ComponentFixture<QuestionResponseMultipleChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionResponseMultipleChoiceComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionResponseMultipleChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //Tests question-response-multiple-choice component exist
  it("should create", () => {
    expect(component).toBeTruthy();
  });

  //Tests add choice button exists
  it("should have a button to add a choice"),
    () => {
      expect(fixture.nativeElement.querySelector("#addChoice").toBeTruthy());
    };

  //Tests submit button exists for multiple choice component
  it("should have a submit button"),
    () => {
      expect(fixture.nativeElement.querySelector("#submit").toBeTruthy());
    };

  //Tests textarea exists for multiple choice componenet
  it("should have textarea for question"),
    () => {
      expect(
        fixture.nativeElement.querySelector("#questionInput").toBeTruthy()
      );
    };
  //Tests that the submit button enables when text is entered into
  // text area
  it("should enable button when textArea is not empty", () => {
    fixture.nativeElement.query("#questionInput").innerText =
      "How prepared do you feel for your projects?";
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector("#submitButton");
    expect(button.nativeElement.disabled).toBeFalsy();
  });
});
