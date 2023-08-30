import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourCardsComponent } from './four-cards.component';

describe('FourCardsComponent', () => {
  let component: FourCardsComponent;
  let fixture: ComponentFixture<FourCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FourCardsComponent]
    });
    fixture = TestBed.createComponent(FourCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
