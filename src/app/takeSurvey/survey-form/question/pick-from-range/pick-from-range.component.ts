import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pick-from-range',
  templateUrl: './pick-from-range.component.html',
  styleUrls: ['./pick-from-range.component.css']
})
export class PickFromRangeComponent implements OnInit {
  @Input()  mainSurveyForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
