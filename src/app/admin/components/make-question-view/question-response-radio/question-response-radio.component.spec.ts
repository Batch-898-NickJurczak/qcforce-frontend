import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionResponseRadioComponent } from './question-response-radio.component';

describe('QuestionResponseRadioComponent', () => {
  let component: QuestionResponseRadioComponent;
  let fixture: ComponentFixture<QuestionResponseRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionResponseRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionResponseRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
