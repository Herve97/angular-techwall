import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCVComponent } from './list-cv.component';

describe('ListCVComponent', () => {
  let component: ListCVComponent;
  let fixture: ComponentFixture<ListCVComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCVComponent]
    });
    fixture = TestBed.createComponent(ListCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
