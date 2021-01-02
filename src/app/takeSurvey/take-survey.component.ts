import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-take-survey',
  templateUrl: './take-survey.component.html',
  styleUrls: ['./take-survey.component.css']
})
export class TakeSurveyComponent implements OnInit {
  
  token !:String;
  constructor( private route: ActivatedRoute,) { }

  ngOnInit(): void {
      /*  takes in token from the url PATH ' survey?token=948n613x938nm384n2b'  */ 
      this.route.queryParams.subscribe(params => { 
        this.token=params["token"];
        })
      
  }
  
}
