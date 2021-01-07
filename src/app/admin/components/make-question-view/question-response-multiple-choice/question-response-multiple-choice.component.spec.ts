import { async, ComponentFixture, TestBed, tick } from "@angular/core/testing";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { QuestionResponseMultipleChoiceComponent } from "./question-response-multiple-choice.component";

describe("QuestionResponseMultipleChoiceComponent", () => {
  let component: QuestionResponseMultipleChoiceComponent;
  let fixture: ComponentFixture<QuestionResponseMultipleChoiceComponent>;
  let submitEl;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionResponseMultipleChoiceComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      //providers: [{ provide: FormBuilder, useValue: FormBuilder }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionResponseMultipleChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    submitEl = fixture.debugElement;
  });

  //Tests question-response-multiple-choice component exist
  it("should create", () => {
    expect(component).toBeTruthy();
  });

  //Tests submit button exists for multiple choice component
  it("should have a submit button"),
    () => {
      expect(fixture.nativeElement.querySelector("#submitButton").toBeTruthy());
    };

  //Tests input  exists for multiple choice componenet
  it("should have input for question"),
    () => {
      expect(fixture.nativeElement.querySelector("#question").toBeTruthy());
    };

  it("should have input for choice1"),
    () => {
      expect(fixture.nativeElement.querySelector("#choice1").toBeTruthy());
    };

  it("should have input for choice2"),
    () => {
      expect(fixture.nativeElement.querySelector("#choice2").toBeTruthy());
    };

  it("should have input for choice3"),
    () => {
      expect(fixture.nativeElement.querySelector("#choice3").toBeTruthy());
    };

  it("should have input for choice4"),
    () => {
      expect(fixture.nativeElement.querySelector("#choice4").toBeTruthy());
    };
 
    //Tests that the submit button enables when text is entered into
  // text area
  it("should enable button when question input and choice 1 and choice 2 is not empty", () => {
    fixture.nativeElement.querySelector("#question").innerText =
      "How prepared do you feel for your projects?";
    fixture.nativeElement.querySelector("#choice1").innerText = "Not at all";
    fixture.nativeElement.querySelector("#choice2").innerText = "Very Prepared";
    fixture.detectChanges();
    tick(1);
    expect(
      submitEl.nativeElement.querySelector("#submitButton").disabled
    ).toBeFalse();
  });
});
