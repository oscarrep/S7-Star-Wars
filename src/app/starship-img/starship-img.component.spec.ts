import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipImgComponent } from './starship-img.component';

describe('StarshipImgComponent', () => {
  let component: StarshipImgComponent;
  let fixture: ComponentFixture<StarshipImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarshipImgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarshipImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
