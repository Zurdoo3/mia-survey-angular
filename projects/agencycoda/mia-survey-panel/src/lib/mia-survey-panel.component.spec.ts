import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaSurveyPanelComponent } from './mia-survey-panel.component';

describe('MiaSurveyPanelComponent', () => {
  let component: MiaSurveyPanelComponent;
  let fixture: ComponentFixture<MiaSurveyPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaSurveyPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaSurveyPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
