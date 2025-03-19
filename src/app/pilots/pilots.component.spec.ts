import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PilotsComponent } from './pilots.component';
import { PilotsService } from '../services/pilots.service';
import { provideHttpClient } from '@angular/common/http';
import { Pilot } from '../interfaces/pilot';

describe('PilotsComponent', () => {
  let component: PilotsComponent;
  let fixture: ComponentFixture<PilotsComponent>;
  let pilotsService: jasmine.SpyObj<PilotsService>;

  const mockPilot: Pilot = {
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

  beforeEach(async () => {
    pilotsService = jasmine.createSpyObj('PilotsService', ['getPilotByUrl']);
    pilotsService.getPilotByUrl.and.returnValue(of(mockPilot));

    await TestBed.configureTestingModule({
      imports: [PilotsComponent],
      providers: [
        provideHttpClient(),
        { provide: PilotsService, useValue: pilotsService },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PilotsComponent);
    component = fixture.componentInstance;
    component.pilots = ['https://swapi.dev/api/people/1/'];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getPilotByUrl and push to pilotDetails', () => {
    expect(pilotsService.getPilotByUrl).toHaveBeenCalledWith('https://swapi.dev/api/people/1/');
    expect(component.pilotDetails.length).toBe(1);
    expect(component.pilotDetails[0].name).toBe('Luke Skywalker');
  });

  it('should extract pilot ID correctly', () => {
    const pilotUrl = 'https://swapi.dev/api/people/5/';
    expect(component.extractId(pilotUrl)).toBe('5');
  });
});