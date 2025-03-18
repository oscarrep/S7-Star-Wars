import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmImgComponent } from './film-img.component';

describe('FilmImgComponent', () => {
  let component: FilmImgComponent;
  let fixture: ComponentFixture<FilmImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmImgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
