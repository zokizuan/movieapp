import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MovieService } from './services/movie.service';
import { AddKeyInterceptor } from './core/interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MovieDetailService } from './services/moviedetail.service';
import { MovieModule } from './movie/movie.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    MovieModule
  ],
  providers: [MovieService,MovieDetailService,{ provide: HTTP_INTERCEPTORS, useClass: AddKeyInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
