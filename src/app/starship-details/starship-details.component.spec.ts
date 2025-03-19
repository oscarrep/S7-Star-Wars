import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StarshipDetailsComponent } from './starship-details.component';
import { StarshipService } from '../services/starship.service';
import { RandomColorService } from '../services/random-color.service';
import { ActivatedRoute, provideRouter, Router } from '@angular/router';
import { of } from 'rxjs';
import { Starship } from '../interfaces/starship';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { PilotsService } from '../services/pilots.service';

describe('StarshipDetailsComponent', () => {
  let component: StarshipDetailsComponent;
  let fixture: ComponentFixture<StarshipDetailsComponent>;
  let starshipService: jasmine.SpyObj<StarshipService>;
  let router: Router;

  const mockStarship: Starship = {
    name: 'X-wing',
    model: 'T-65 X-wing',
    manufacturer: 'Incom Corporation',
    cost_in_credits: '149999',
    length: '12.5',
    max_atmosphering_speed: '1050',
    crew: '1',
    passengers: '0',
    cargo_capacity: '110',
    consumables: '1 week',
    hyperdrive_rating: '1.0',
    starship_class: 'Starfighter',
    pilots: [
      "https://swapi.dev/api/people/1/",
      "https://swapi.dev/api/people/9/",
      "https://swapi.dev/api/people/18/",
      "https://swapi.dev/api/people/19/"
    ],
    films: [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/"
    ],
    next: '',
    previous: '',
    url: 'https://swapi.dev/api/starships/12/',
  };

  beforeEach(async () => {
    const starshipServiceSpy = jasmine.createSpyObj('StarshipSerice', ['getStarshipByID']);
    starshipServiceSpy.getStarshipByID.and.returnValue(of(mockStarship));

    await TestBed.configureTestingModule({
      imports: [StarshipDetailsComponent],
      providers: [
        provideHttpClient(),
        provideRouter([]),
        { provide: StarshipService, useValue: starshipServiceSpy },
        { provide: RandomColorService, useValue: { randomColor: 'blue' } },
        { provide: PilotsService, useValue: {} },
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({ get: (key: string) => (key === 'id' ? '9' : null) }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(StarshipDetailsComponent);
    component = fixture.componentInstance;
    component.selectedShip = {
      name: 'Death Star',
      model: 'DS-1 Orbital Battle Station',
      manufacturer: 'Imperial Department of Military Research, Sienar Fleet Systems',
      cost_in_credits: '1000000000000',
      length: '120000',
      max_atmosphering_speed: 'n/a',
      crew: '342,953',
      passengers: '843,342',
      cargo_capacity: '1000000000000',
      consumables: '3 years',
      hyperdrive_rating: '4.0',
      starship_class: 'Deep Space Mobile Battlestation',
      pilots: [],
      films: ['https://swapi.dev/api/films/1/'],
      next: 'string',
      previous: 'string',
      url: 'string',
    };
    starshipService = TestBed.inject(StarshipService) as jasmine.SpyObj<StarshipService>;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly display starship details', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.ship-title')?.textContent).toContain('Death Star');
    expect(component.selectedShip?.model).toBe('DS-1 Orbital Battle Station');
    expect(component.selectedShip?.manufacturer).toBe('Imperial Department of Military Research, Sienar Fleet Systems');
    expect(component.selectedShip?.cargo_capacity).toBe('1000000000000');
    expect(component.selectedShip?.crew).toBe('342,953');
    expect(component.selectedShip?.passengers).toBe('843,342');
    expect(component.selectedShip?.cost_in_credits).toBe('1000000000000');
    expect(component.selectedShip?.length).toBe('120000');
    expect(component.selectedShip?.max_atmosphering_speed).toBe('n/a');
    expect(component.selectedShip?.hyperdrive_rating).toBe('4.0');
  });

  it('should navigate back when back button is clicked', () => {
    spyOn(router, 'navigate');
    const backButton = fixture.nativeElement.querySelector('.back-btn');
    backButton.click();
    expect(router.navigate).toHaveBeenCalledWith(['/starships']);
  });
});
