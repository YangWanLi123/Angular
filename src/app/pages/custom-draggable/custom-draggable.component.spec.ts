import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDraggableComponent } from './custom-draggable.component';

describe('CustomDraggableComponent', () => {
  let component: CustomDraggableComponent;
  let fixture: ComponentFixture<CustomDraggableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDraggableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDraggableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
