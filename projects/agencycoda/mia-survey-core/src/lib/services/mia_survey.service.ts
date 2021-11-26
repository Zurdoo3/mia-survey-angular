import { Inject, Injectable } from '@angular/core';
import { MiaSurvey } from '../entities/mia_survey';
import { MiaBaseCrudHttpService, MiaCoreConfig, MIA_CORE_PROVIDER } from '@agencycoda/mia-core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MiaSurveyService extends MiaBaseCrudHttpService<MiaSurvey> {

  constructor(
    @Inject(MIA_CORE_PROVIDER) protected config: MiaCoreConfig,
    protected http: HttpClient
  ) {
    super(http);
    this.basePathUrl = config.baseUrl + 'mia-survey';
  }
 
}