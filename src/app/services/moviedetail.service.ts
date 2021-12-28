import { Injectable } from '@angular/core';
import { Store } from '../core/store';
import { catchError, first, retry, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { movieDetail_resp } from '../core/models/stateModel/moviedetailModels';
import { requiredMovieDetail_resp } from '../core/models/viewModel/moviedetailview';
import { apiDetails } from '../core/apidetails';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailService extends Store<requiredMovieDetail_resp>  {

  constructor(private http: HttpClient) {
    super({});
  }



  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  public GetMovieDetails(movieid: number) {
    const API_URL = apiDetails.APIBaseURL + apiDetails.APIversion + apiDetails.movie + "/" + movieid + '?' + "language=" + apiDetails.english_language;
    this.http
      .get<movieDetail_resp>(API_URL)
      .pipe(retry(1), catchError(this.handleError), first())
      .subscribe((response: movieDetail_resp) => {
        let ResultData: requiredMovieDetail_resp = {
          backdrop_path: response.backdrop_path,
          genres: response.genres,
          homepage: response.homepage,
          id: response.id,
          imdb_id: response.imdb_id,
          original_language: response.original_language,
          original_title: response.original_title,
          overview: response.overview,
          popularity: response.popularity,
          poster_path: response.poster_path,
          release_date: response.release_date,
          revenue: response.revenue,
          runtime: response.runtime,
          spoken_languages: response.spoken_languages,
          title: response.title,
          video: response.video,
        }
        this.setState(ResultData);
      });
  }

  /*   const API_URL = (searchQuery == "" || searchQuery == undefined) ? (this.APIBaseURL + this.APIversion + this.movie + this.popular + this.ApiKey + this.Ampersand + "language=" + this.english_language + this.Ampersand + pageNumber) : (this.APIBaseURL + this.APIversion + this.movie + this.popular + this.ApiKey + this.Ampersand + "language=" + this.english_language + this.Ampersand + pageNumber); */
  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // window.alert(errorMessage);
    return throwError(errorMessage);
  }
}