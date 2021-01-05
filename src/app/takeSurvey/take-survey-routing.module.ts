import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TakeSurveyComponent } from './take-survey.component';

const routes: Routes = [
  {
    path: '',
    component: TakeSurveyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TakeSurveyRoutingModule {}
