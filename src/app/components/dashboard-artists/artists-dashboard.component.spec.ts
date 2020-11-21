import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsDashboardComponent } from './artists-dashboard.component';

describe('ArtistsDashboardComponent', () => {
  let component: ArtistsDashboardComponent;
  let fixture: ComponentFixture<ArtistsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
