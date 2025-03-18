import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PilotImgComponent } from './pilot-img.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('PilotImgComponent', () => {
  let component: PilotImgComponent;
  let fixture: ComponentFixture<PilotImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PilotImgComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PilotImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => { expect(component).toBeTruthy(); });

  it('should render image at correct URL using pilotId', () => {
    component.pilotId = '1';
    component.pilot = {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      hair_color: 'blond',
      skin_color: 'fair',
      eye_color: 'blue',
      birth_year: '19BBY',
      gender: 'male',
      films: [
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/6/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/7/"
      ],
      url: 'https://swapi.dev/api/people/1/'
    };
    fixture.detectChanges();

    const imgElement: DebugElement = fixture.debugElement.query(By.css('img'));
    const imgUrl = `https://raw.githubusercontent.com/vieraboschkova/swapi-gallery/refs/heads/main/static/assets/img/people/1.jpg`;

    expect(imgElement).toBeTruthy();
    expect(imgElement.nativeElement.src).toBe(imgUrl);
  })

  it('should print "Image not found" when pilotId is not provided', () => {
    component.pilotId = '';
    component.pilot = { name: '', height: '', mass: '', hair_color: '', skin_color: '', eye_color: '', birth_year: '', gender: 'mle', films: [], url: '' };
    fixture.detectChanges();

    const errorElement: DebugElement = fixture.debugElement.query(By.css('p.text-rose-600'));

    expect(errorElement).toBeTruthy();
    expect(errorElement.nativeElement.textContent).toBe('Image not found');
  })

});
