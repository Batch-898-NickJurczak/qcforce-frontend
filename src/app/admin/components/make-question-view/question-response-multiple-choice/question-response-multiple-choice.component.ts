import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-question-response-multiple-choice",
  templateUrl: "./question-response-multiple-choice.component.html",
  styleUrls: ["./question-response-multiple-choice.component.css"],
})
export class QuestionResponseMultipleChoiceComponent implements OnInit {
  multipleChoiceForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.multipleChoiceForm = this.fb.group({
      question: "",
      choices: this.fb.array([]),
    });
  }

  get multipleChoiceForms() {
    return this.multipleChoiceForm.get("choices") as FormArray;
  }

  addChoice() {
    const choice = this.fb.group({
      answers: [],
    });

    this.multipleChoiceForms.push(choice);
  }

  deleteChoice(i) {
    this.multipleChoiceForms.removeAt(i);
  }
}
