import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyLostComponent } from './recently-lost.component';

describe('RecentlyLostComponent', () => {
  let component: RecentlyLostComponent;
  let fixture: ComponentFixture<RecentlyLostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentlyLostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentlyLostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
