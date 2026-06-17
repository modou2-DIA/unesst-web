import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VieEnTunisieComponent } from './vie-en-tunisie.component';

describe('VieEnTunisieComponent', () => {
  let component: VieEnTunisieComponent;
  let fixture: ComponentFixture<VieEnTunisieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VieEnTunisieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VieEnTunisieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
