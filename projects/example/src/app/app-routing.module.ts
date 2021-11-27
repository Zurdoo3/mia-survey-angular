import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyListPageComponent } from 'projects/agencycoda/mia-survey-panel/src/public-api';

const routes: Routes = [
  { path: 'list', component: SurveyListPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
