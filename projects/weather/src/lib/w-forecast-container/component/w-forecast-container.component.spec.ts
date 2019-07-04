import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WForecastContainerComponent } from './w-forecast-container.component';

describe('WForecastContainerComponent', () => {
  let component: WForecastContainerComponent;
  let fixture: ComponentFixture<WForecastContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WForecastContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WForecastContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
