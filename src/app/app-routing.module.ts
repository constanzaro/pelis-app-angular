import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/routes/home/home.component';
import { MoviesComponent } from './components/routes/movies/movies.component';
import { SeriesComponent } from './components/routes/series/series.component';
import { EnterComponent } from './components/routes/enter/enter.component';
import { LoginComponent } from './components/auth/login/login.component';

const routes: Routes = [

{   
  path: "home",
  component: HomeComponent, 
},

{
  path: "login",
  component:LoginComponent,
},
{
  path:"movies",
  component: MoviesComponent,
},

{
  path:"series",
  component:SeriesComponent,
},

{
  path:"enter",
  component:EnterComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
