import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from 'src/app/models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  //Endpoint for hitting the question controller
  constUrl: string = "http://localhost:8080/question"

  constructor(private httpClient: HttpClient) { }

  //Sends created question to the database
  sendQuestionPost(question: Question): Observable<Question> {
    return this.httpClient.post<Question>(this.constUrl, question);
  }

  //Returns all questions from the database
  public readAllQuestions(): Observable<Question[]> {
  
    return this.httpClient.get<Question[]>(this.constUrl);
  }

}
