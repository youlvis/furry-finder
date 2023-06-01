import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDogComponent } from './modal-dog.component';

describe('ModalDogComponent', () => {
  let component: ModalDogComponent;
  let fixture: ComponentFixture<ModalDogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
