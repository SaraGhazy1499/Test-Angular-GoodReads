import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBookReviewsComponent } from './user-book-reviews.component';

describe('UserBookReviewsComponent', () => {
  let component: UserBookReviewsComponent;
  let fixture: ComponentFixture<UserBookReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBookReviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBookReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
