import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { Question } from "../../models/question.model";

import { QuestionService } from "./question.service";

describe("QuestionService", () => {
  let questionService: QuestionService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    //TestBed.configureTestingModule({});
    //questionService = TestBed.inject(QuestionService);
    httpClientSpy = jasmine.createSpyObj("HttpClient", ["get", "post"]);
    questionService = new QuestionService(httpClientSpy as any);
  });

  it("should be created", () => {
    expect(questionService).toBeTruthy();
  });

  // it('should return expected questions (HttpClient called once)', () => {
  //   const expectedQuestions: Question[] =
  //   [{ id: 1, type: 'MULTIPLE_CHOICE', version: 1, question:['How are you?', 'Good', 'Bad'] }];

  //   httpClientSpy.get.and.returnValue(of(expectedQuestions));

  //   questionService.getQuestions().subscribe(
  //   questions => expect(questions).toEqual(expectedQuestions, 'expected questions'),
  //   fail
  //   );
  //   expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  // });

  // it('should return an error when the server returns a 404 when getting questions', () => {
  //   const errorResponse = new HttpErrorResponse({
  //     error: 'test 404 error',
  //     status: 404, statusText: 'Not Found'
  //   });

  //   httpClientSpy.get.and.returnValue(of(errorResponse));

  //   questionService.getQuestions().subscribe(
  //     questions => fail('expected an error, not questions'),
  //     error  => expect(error.message).toContain('test 404 error')
  //   );
  // });

  // it('should return expected questions (HttpClient called once)', () => {
  //   const insertedQuestion: Question[] =
  //   [{ id: 1, type: 'MULTIPLE_CHOICE', version: 1, question:['How are you?', 'Good', 'Bad'] }];

  //   httpClientSpy.get.and.returnValue(of(insertedQuestion));

  //   questionService.postQuestion().subscribe(
  //   question => expect(question).toEqual(insertedQuestion, 'inserted question'),
  //   fail
  //   );
  //   expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');
  // });

  // it('should return expected questions (HttpClient called once)', () => {
  //   const expectedQuestions: Question[] =
  //   [{ id: 1, type: 'MULTIPLE_CHOICE', version: 1, question:['How are you?', 'Good', 'Bad'] }];

  //   httpClientSpy.get.and.returnValue(of(expectedQuestions));

  //   questionService.getQuestions().subscribe(
  //   questions => expect(questions).toEqual(expectedQuestions, 'expected questions'),
  //   fail
  //   );
  //   expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  // });

  // it('should return an error when the server returns a 404 when getting questions', () => {
  //   const errorResponse = new HttpErrorResponse({
  //     error: 'test 404 error',
  //     status: 404, statusText: 'Not Found'
  //   });

  //   httpClientSpy.get.and.returnValue(of(errorResponse));

  //   questionService.getQuestions().subscribe(
  //     questions => fail('expected an error, not questions'),
  //     error  => expect(error.message).toContain('test 404 error')
  //   );
  // });

  // it('should return expected questions (HttpClient called once)', () => {
  //   const insertedQuestion: Question[] =
  //   [{ id: 1, type: 'MULTIPLE_CHOICE', version: 1, question:['How are you?', 'Good', 'Bad'] }];

  //   httpClientSpy.get.and.returnValue(of(insertedQuestion));

  //   questionService.postQuestion().subscribe(
  //   question => expect(question).toEqual(insertedQuestion, 'inserted question'),
  //   fail
  //   );
  //   expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');
  // });

  // it('should return an error when the server returns a 404 when posting a question', () => {
  //   const errorResponse = new HttpErrorResponse({
  //     error: 'test 400 error',
  //     status: 400, statusText: 'Bad Request'
  //   });

  //   httpClientSpy.post.and.returnValue(of(errorResponse));

  //   questionService.postQuestion().subscribe(
  //     questions => fail('expected an error, not questions'),
  //     error  => expect(error.message).toContain('test 400 error')
  //   );
  // });

  //   questionService.postQuestion().subscribe(
  //     questions => fail('expected an error, not questions'),
  //     error  => expect(error.message).toContain('test 400 error')
  //   );
  // });
});
