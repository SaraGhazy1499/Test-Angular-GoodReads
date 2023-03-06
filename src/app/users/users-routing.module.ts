import { UserBookDetailsComponent } from './books/user-book-details/user-book-details.component';
import { UserBooksComponent } from './books/user-books/user-books.component';
import { UserAuthorDetailsComponent } from './authors/user-author-details/user-author-details.component';
import { UserAuthorsComponent } from './authors/user-authors/user-authors.component';
import { UserCategoryDetailsComponent } from './categories/user-category-details/user-category-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCategoriesComponent } from './categories/user-categories/user-categories.component';
import { UserShowComponent } from './user-show/user-show.component';
import { UserStatusReadingComponent } from './user-status-reading/user-status-reading.component';

const routes: Routes = [

    {path:'',component:UserShowComponent,children:[
    {path:'',component:UserStatusReadingComponent},
    {path:'Categories',component:UserCategoriesComponent,children:
    [
      {path:':id',component:UserCategoryDetailsComponent}
    ]},
    {path:'Authors',component:UserAuthorsComponent,children:[
      {path:':id',component:UserAuthorDetailsComponent}
    ]},
    {path:'Books',component:UserBooksComponent,children:[
      {path:':id',component:UserBookDetailsComponent}
    ]}
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
