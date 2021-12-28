import { Injectable } from '@angular/core';
import { Store } from '../core/store';
import { catchError, first, retry, throwError } from 'rxjs';
import { movieLists_resp, MovieType } from '../core/models/stateModel/stateModels';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiDetails } from '../core/apidetails';

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


  public GetMovieLists(movietype: MovieType, pageChange?: number) {
    let pageNumberValue = 1;
    // page handling
    if (pageChange) {
      pageNumberValue = pageChange
    }
    let pageNumber = `page=${pageNumberValue}`

    const API_URL = apiDetails.APIBaseURL + apiDetails.APIversion + apiDetails.movie + "/" + movietype +  '?' + "language=" + apiDetails.english_language + apiDetails.Ampersand + pageNumber;
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