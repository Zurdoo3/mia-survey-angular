import { MiaSurvey, MiaSurveyService } from '@agencycoda/mia-survey-core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

export class MiaSurveyExecutePageConfig {
  showHeader? = false;
}

@Component({
  selector: 'lib-survey-execute-page',
  templateUrl: './survey-execute-page.component.html',
  styleUrls: ['./survey-execute-page.component.scss']
})
export class SurveyExecutePageComponent implements OnInit, OnDestroy {

  config?: MiaSurveyExecutePageConfig;

  survey?: MiaSurvey;

  isLoading = true;

  duration = 0;
  timerSubs: any;

  constructor(
    protected surveyService: MiaSurveyService,
    protected route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.loadConfig();
    this.loadParams();
  }

  ngOnDestroy(): void {
    if(this.timerSubs != undefined){
      clearInterval(this.timerSubs);
      this.timerSubs = undefined;
    }
  }

  onClickSend() {

  }

  loadTimer() {
    if(this.timerSubs != undefined){
      clearInterval(this.timerSubs);
      this.timerSubs = undefined;
    }
    this.timerSubs = setInterval(() => {
      this.duration++;
    }, 1000);
  }

  loadParams() {
    this.route.params
    .pipe(map(params => params['id']))
    .pipe(switchMap(surveyId => this.surveyService.fetchWithRelation(surveyId, ['questions'])))
    .pipe(tap(survey => this.survey = survey))
    .pipe(catchError(error => {
      this.isLoading = false;
      throw 'No se ha encontrado la encuesta';
    }))
    .pipe(tap(survey => this.loadTimer()))
    .subscribe(res => this.isLoading = false);
  }

  loadConfig() {
    this.route.data
    .subscribe(res => this.config = res ? res : new MiaSurveyExecutePageConfig());
  }
}
