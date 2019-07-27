import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WForecastComponent } from "./w-forecast.component";

describe("WForecastComponent", () => {
  let component: WForecastComponent;
  let fixture: ComponentFixture<WForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WForecastComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
