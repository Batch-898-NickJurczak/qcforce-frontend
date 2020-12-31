import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyListViewComponent } from './components/survey-list-view/survey-list-view.component';


const routes: Routes = [
  {path:'', component: SurveyListViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
