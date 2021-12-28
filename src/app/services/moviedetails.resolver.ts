import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, filter, first, Observable, of, tap } from 'rxjs';
import { MovieDetailService } from './moviedetail.service';

@Injectable({
  providedIn: 'root'
})
export class MoviedetailsResolver implements Resolve<boolean> {
  constructor(private movieDetailService: MovieDetailService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    console.log(route.paramMap.get('id'));
    const MovieID: string = route.paramMap.get('id')!;
    this.movieDetailService.GetMovieDetails(MovieID);
    // console.log(this.movieDetailService.getState())
    return this.movieDetailService.getState().pipe(
      filter(movieDetail => !!movieDetail),
      first(),
      tap((data) => console.log(data)),
      catchError(() => {
      return of('data not available at this time');
    }));
  }
}
