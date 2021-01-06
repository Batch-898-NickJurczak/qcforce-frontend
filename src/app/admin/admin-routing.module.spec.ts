import {
  async,
  ComponentFixture,
  fakeAsync,
  tick,
  TestBed,
} from "@angular/core/testing";
import { Location } from "@angular/common";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { QuestionResponseMultipleChoiceComponent } from "./components/make-question-view/question-response-multiple-choice/question-response-multiple-choice.component";
import { QuestionResponseShortAnswerComponent } from "./components/make-question-view/question-response-short-answer/question-response-short-answer.component";
import { QuestionResponseRadioComponent } from "./components/make-question-view/question-response-radio/question-response-radio.component";
import { routes } from "./admin-routing.module";
let location: Location;
let router: Router;

describe("QuestionResponseMultipleChoiceComponent", () => {
  let component: QuestionResponseMultipleChoiceComponent;
  let fixture: ComponentFixture<QuestionResponseMultipleChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [
        QuestionResponseMultipleChoiceComponent,
        QuestionResponseShortAnswerComponent,
        QuestionResponseRadioComponent,
      ],
    });
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();
    fixture = TestBed.createComponent(QuestionResponseMultipleChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should navigate to "question/multi-choice"', fakeAsync(() => {
    router.navigate(["question/multi-choice"]);
    tick();
    expect(location.path()).toBe("/question/multi-choice");
  }));
});
