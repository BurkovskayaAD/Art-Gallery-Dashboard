import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingsDashboardComponent } from './paintings-dashboard.component';

describe('PaintingsDashboardComponent', () => {
  let component: PaintingsDashboardComponent;
  let fixture: ComponentFixture<PaintingsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaintingsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintingsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
