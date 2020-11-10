import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArtistPageComponent } from './add-artist-page.component';

describe('AddArtistPageComponent', () => {
  let component: AddArtistPageComponent;
  let fixture: ComponentFixture<AddArtistPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddArtistPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddArtistPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
