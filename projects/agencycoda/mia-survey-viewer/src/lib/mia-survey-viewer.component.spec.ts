import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaSurveyViewerComponent } from './mia-survey-viewer.component';

describe('MiaSurveyViewerComponent', () => {
  let component: MiaSurveyViewerComponent;
  let fixture: ComponentFixture<MiaSurveyViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaSurveyViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaSurveyViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
