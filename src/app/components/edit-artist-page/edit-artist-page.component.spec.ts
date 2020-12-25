import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditArtistPageComponent } from './edit-artist-page.component';

describe('EditArtistPageComponent', () => {
  let component: EditArtistPageComponent;
  let fixture: ComponentFixture<EditArtistPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditArtistPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditArtistPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
