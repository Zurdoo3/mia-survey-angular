import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Agency Coda
import { MiaLayoutModule } from '@agencycoda/mia-layout';
import { MiaCoreModule } from '@agencycoda/mia-core';
import { MiaTableModule } from '@agencycoda/mia-table';
import { MiaFormModule } from '@agencycoda/mia-form';

// Pages
import { SurveyListPageComponent } from './pages/survey-list-page/survey-list-page.component';

@NgModule({
  declarations: [
    // Pages
    SurveyListPageComponent
  ],
  imports: [
		// Angular
	  CommonModule,

		// Agency Coda
		MiaTableModule,
    MiaFormModule,
    MiaLayoutModule
	],
  exports: []
})
export class MiaSurveyPanelModule { }
