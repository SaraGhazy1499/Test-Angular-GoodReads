import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserBooksComponent } from './books/user-books/user-books.component';
import { UserBookDetailsComponent } from './books/user-book-details/user-book-details.component';
import { UserAuthorsComponent } from './authors/user-authors/user-authors.component';
import { UserAuthorDetailsComponent } from './authors/user-author-details/user-author-details.component';
import { UserCategoriesComponent } from './categories/user-categories/user-categories.component';
import { UserCategoryDetailsComponent } from './categories/user-category-details/user-category-details.component';
import { UserHeaderComponent } from './user-layout/user-header/user-header.component';
import { UserSidebarComponent } from './user-layout/user-sidebar/user-sidebar.component';
import { UserFooterComponent } from './user-layout/user-footer/user-footer.component';


@NgModule({
  declarations: [
    UserBooksComponent,
    UserBookDetailsComponent,
    UserAuthorsComponent,
    UserAuthorDetailsComponent,
    UserCategoriesComponent,
    UserCategoryDetailsComponent,
    UserHeaderComponent,
    UserSidebarComponent,
    UserFooterComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
