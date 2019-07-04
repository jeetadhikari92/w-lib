import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WCityContainerComponent } from './w-city-container.component';

describe('WCityContainerComponent', () => {
  let component: WCityContainerComponent;
  let fixture: ComponentFixture<WCityContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WCityContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WCityContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
