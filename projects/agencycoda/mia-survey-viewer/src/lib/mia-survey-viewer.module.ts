import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SurveyExecutePageComponent } from './pages/survey-execute-page/survey-execute-page.component';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';




@NgModule({
  declarations: [
    SurveyExecutePageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule
  ],
  exports: [
    SurveyExecutePageComponent
  ]
})
export class MiaSurveyViewerModule { }
