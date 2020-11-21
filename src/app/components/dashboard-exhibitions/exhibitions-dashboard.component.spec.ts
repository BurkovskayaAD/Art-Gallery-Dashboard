import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitionsDashboardComponent } from './exhibitions-dashboard.component';

describe('ExhibitionsDashboardComponent', () => {
  let component: ExhibitionsDashboardComponent;
  let fixture: ComponentFixture<ExhibitionsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExhibitionsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitionsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
