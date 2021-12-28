import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MoviedetailsResolver } from './services/moviedetails.resolver';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'movie/:id', loadChildren: () => import('./movie/movie.module').then(m => m.MovieModule), resolve: { resolvedData: MoviedetailsResolver } },
  { path: 'movie', loadChildren: () => import('./movie/movie.module').then(m => m.MovieModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
