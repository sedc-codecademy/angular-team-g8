import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingOutletComponent } from './shipping-outlet.component';

describe('ShippingOutletComponent', () => {
  let component: ShippingOutletComponent;
  let fixture: ComponentFixture<ShippingOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
