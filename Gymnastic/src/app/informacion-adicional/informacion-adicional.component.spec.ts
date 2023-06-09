import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionAdicionalComponent } from './informacion-adicional.component';

describe('InformacionAdicionalComponent', () => {
  let component: InformacionAdicionalComponent;
  let fixture: ComponentFixture<InformacionAdicionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionAdicionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionAdicionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
