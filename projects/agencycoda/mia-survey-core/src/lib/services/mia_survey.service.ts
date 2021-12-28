import { Inject, Injectable } from '@angular/core';
import { MiaSurvey } from '../entities/mia_survey';
import { MiaBaseCrudHttpService, MiaCoreConfig, MIA_CORE_PROVIDER } from '@agencycoda/mia-core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MiaSurveyInvitation } from '../entities/mia_survey_invitation';

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
 
  fetchPublicLink(surveyId: number): Observable<MiaSurveyInvitation> {
    return this.getOb(this.basePathUrl + '/fetch-public-link/' + surveyId);
  }

  sendInvitations(surveyId: number, invitations: Array<MiaSurveyInvitation>, caption: string) {
    return this.postOb(this.basePathUrl + '/send-invitations', { survey_id: surveyId, invitations: invitations, caption: caption});
  }
}