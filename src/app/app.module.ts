import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from "@angular/material/icon";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from './@core/interceptors/interceptor';


const mat_modules = [
  MatIconModule,
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...mat_modules
  ],
  providers: [
    {
    provide:HTTP_INTERCEPTORS,
    useClass:Interceptor,
    multi:true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
