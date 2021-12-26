import { Injectable } from '@angular/core';
import { Store } from '../core/store';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, first, retry, throwError } from 'rxjs';
import { movieLists_resp, MovieType } from '../core/models/stateModel/stateModels';

@Injectable({
  providedIn: 'root'
})
export class MovieService extends Store<movieLists_resp>  {

  constructor(private http: HttpClient) {
    super({
      page: 1,
      results: [],
      total_pages: 0,
      total_results: 0
    });
  }



  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // Define API
  readonly APIversion = "/3";
  readonly movie = "/movie";
  readonly top_rated = "/top_rated";
  readonly APIBaseURL = 'https://api.themoviedb.org';
  readonly ApiKey = "?api_key=c396ce4ccf1636a115618f3a5570d9e5";
  readonly english_language = "en-US";
  readonly Ampersand = "&"
  readonly popular = "/popular"


  public GetMovieLists(movietype: MovieType, pageChange?: number) {
    let pageNumberValue = 1;
    // page handling
    if (pageChange) {
      pageNumberValue = pageChange
    }
    let pageNumber = `page=${pageNumberValue}`

    const API_URL = this.APIBaseURL + this.APIversion + "/" + movietype + this.popular + this.ApiKey + this.Ampersand + "language=" + this.english_language + this.Ampersand + pageNumber;
    // TEST

    this.http
      .get<movieLists_resp>(API_URL)
      .pipe(retry(1), catchError(this.handleError), first())
      .subscribe((response: movieLists_resp) => {
        let ResultData: movieLists_resp = {
          page: response.page,
          results: response.results,
          total_pages: response.total_pages,
          total_results: response.total_results
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
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}