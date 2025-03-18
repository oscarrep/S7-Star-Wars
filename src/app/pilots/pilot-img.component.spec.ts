import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotImgComponent } from './pilot-img.component';

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
