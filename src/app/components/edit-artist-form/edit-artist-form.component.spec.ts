import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditArtistFormComponent } from './edit-artist-form.component';

describe('EditArtistFormComponent', () => {
  let component: EditArtistFormComponent;
  let fixture: ComponentFixture<EditArtistFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditArtistFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditArtistFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
