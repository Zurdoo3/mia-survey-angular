import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaSurveyCoreComponent } from './mia-survey-core.component';

describe('MiaSurveyCoreComponent', () => {
  let component: MiaSurveyCoreComponent;
  let fixture: ComponentFixture<MiaSurveyCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaSurveyCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaSurveyCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
