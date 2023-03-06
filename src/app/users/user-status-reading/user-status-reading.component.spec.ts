import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStatusReadingComponent } from './user-status-reading.component';

describe('UserStatusReadingComponent', () => {
  let component: UserStatusReadingComponent;
  let fixture: ComponentFixture<UserStatusReadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserStatusReadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStatusReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
