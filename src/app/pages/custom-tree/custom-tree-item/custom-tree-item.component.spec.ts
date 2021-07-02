import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTreeItemComponent } from './custom-tree-item.component';

describe('CustomTreeItemComponent', () => {
  let component: CustomTreeItemComponent;
  let fixture: ComponentFixture<CustomTreeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomTreeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTreeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
