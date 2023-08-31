import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourSquaresToScreenComponent } from './four-squares-to-screen.component';

describe('FourSquaresToScreenComponent', () => {
  let component: FourSquaresToScreenComponent;
  let fixture: ComponentFixture<FourSquaresToScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FourSquaresToScreenComponent]
    });
    fixture = TestBed.createComponent(FourSquaresToScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
