import { Component, Input, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { QuestionService } from "src/app/admin/admin-services/question.service";
import { Question } from "src/app/models/question.model";

@Component({
  selector: "app-question-response-multiple-choice",
  templateUrl: "./question-response-multiple-choice.component.html",
  styleUrls: ["./question-response-multiple-choice.component.css"],
})
export class QuestionResponseMultipleChoiceComponent implements OnInit {
  multipleChoiceForm: FormGroup;

  @Input()
  newQuestion: Question = {
    id: 1,
    createdOn: new Date(Date.now()),
    type: "MULTIPLE_CHOICE",
    version: 1,
    question: [],
  };
  constructor(private fb: FormBuilder, private questionService: QuestionService) {}

  // Initializes form group
  ngOnInit() {
    this.multipleChoiceForm = this.fb.group({
      question: "",
      choice1: "",
      choice2: "",
      choice3: "",
      choice4: "",
    });
  }
  //getter for choices in multipChoiceForm formgroup
  get multipleChoiceForms() {
    return this.multipleChoiceForm.get("choices") as FormArray;
  }

  // Deletes existing choice from form group

  onSubmit() {

    this.questionService.sendQuestionPost(this.newQuestion).subscribe(
       questionResp => console.log(questionResp)
    );

  }
}
