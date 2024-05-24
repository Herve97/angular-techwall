import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCVComponent } from './item-cv.component';

describe('ItemCVComponent', () => {
  let component: ItemCVComponent;
  let fixture: ComponentFixture<ItemCVComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemCVComponent]
    });
    fixture = TestBed.createComponent(ItemCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
