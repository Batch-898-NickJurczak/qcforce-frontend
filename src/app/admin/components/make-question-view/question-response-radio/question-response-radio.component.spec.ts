import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { QuestionResponseRadioComponent } from "./question-response-radio.component";

describe("QuestionResponseRadioComponent", () => {
  let component: QuestionResponseRadioComponent;
  let fixture: ComponentFixture<QuestionResponseRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionResponseRadioComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionResponseRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have a textarea for question range"),
    () => {
      expect(
        fixture.nativeElement.querySelector("#rangeQuestion").toBeTruthy()
      );
    };

  it("should have a button to add a choice"),
    () => {
      expect(fixture.nativeElement.querySelector("#addChoice").toBeTruthy());
    };

  it("should have a submit button"),
    () => {
      expect(fixture.nativeElement.querySelector("#submit").toBeTruthy());
    };
});
