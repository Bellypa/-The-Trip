import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourismsComponent } from './tourisms.component';

describe('TourismsComponent', () => {
  let component: TourismsComponent;
  let fixture: ComponentFixture<TourismsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourismsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourismsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
