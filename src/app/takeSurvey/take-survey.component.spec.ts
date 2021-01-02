import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { TakeSurveyComponent } from './take-survey.component';

class MockRoute{
  params : { [key : string]:string } = { token : `48n613x938nm384n2b`};
  queryParams = of(this.params); 
}
describe('TakeSurveyComponent', () => {
  let component: TakeSurveyComponent;
  let fixture: ComponentFixture<TakeSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it ( 'should initialize token', async(() =>{
    expect (component.token).toEqual(`48n613x938nm384n2b`);
  }));

});
