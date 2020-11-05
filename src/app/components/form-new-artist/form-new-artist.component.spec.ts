import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewArtistComponent } from './form-new-artist.component';

describe('FormNewArtistComponent', () => {
  let component: FormNewArtistComponent;
  let fixture: ComponentFixture<FormNewArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNewArtistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNewArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
