import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WCityComponent } from "./w-city.component";

describe("WCityComponent", () => {
  let component: WCityComponent;
  let fixture: ComponentFixture<WCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WCityComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
