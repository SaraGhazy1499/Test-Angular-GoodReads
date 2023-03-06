import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAuthorBooksComponent } from './user-author-books.component';

describe('UserAuthorBooksComponent', () => {
  let component: UserAuthorBooksComponent;
  let fixture: ComponentFixture<UserAuthorBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAuthorBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAuthorBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
