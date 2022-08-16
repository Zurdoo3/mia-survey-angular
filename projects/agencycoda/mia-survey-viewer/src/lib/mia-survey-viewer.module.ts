import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SurveyExecutePageComponent } from './pages/survey-execute-page/survey-execute-page.component';
import {MatRadioModule} from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    SurveyExecutePageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule
  ],
  exports: [
    SurveyExecutePageComponent
  ]
})
export class MiaSurveyViewerModule { }
