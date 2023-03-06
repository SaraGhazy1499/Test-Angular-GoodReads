import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationRoutingModule } from './administration-routing.module';
import { AdminAuthorsComponent } from './admin-authors/admin-authors.component';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { AdminBooksComponent } from './admin-books/admin-books.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminSidebarComponent } from './admin-layout/admin-sidebar/admin-sidebar.component';
import { AdminHeaderComponent } from './admin-layout/admin-header/admin-header.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminAuthorsComponent,
    AdminCategoriesComponent,
    AdminBooksComponent,
    AdminDashboardComponent,
    AdminSidebarComponent,
    AdminHeaderComponent,
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AdministrationModule { }
