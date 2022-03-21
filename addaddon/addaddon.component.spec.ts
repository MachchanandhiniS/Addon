import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddaddonComponent } from './addaddon.component';

describe('AddaddonComponent', () => {
  let component: AddaddonComponent;
  let fixture: ComponentFixture<AddaddonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddaddonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddaddonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
