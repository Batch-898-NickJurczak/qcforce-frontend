import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { Question } from "../../models/question.model";

import { QuestionService } from "./question.service";

describe("QuestionService", () => {
  let questionService: QuestionService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
   
    httpClientSpy = jasmine.createSpyObj("HttpClient", ["get", "post"]);
    questionService = new QuestionService(httpClientSpy as any);
  });

  it("should be created", () => {
    expect(questionService).toBeTruthy();
  });

});
