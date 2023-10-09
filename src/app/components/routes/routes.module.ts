import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { SeriesComponent } from './series/series.component';
import { EnterComponent } from './enter/enter.component';



@NgModule({
  declarations: [
    HomeComponent,
    MoviesComponent,
    SeriesComponent,
    EnterComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class RoutesModule { }
