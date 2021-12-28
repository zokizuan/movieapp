import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { requiredMovieDetail_resp } from 'src/app/core/models/viewModel/moviedetailview';
import { MovieDetailService } from 'src/app/services/moviedetail.service';
import { MoviedetailsResolver } from 'src/app/services/moviedetails.resolver';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy {
  subscription: Subscription[] = [];
  Results$!: Observable<requiredMovieDetail_resp>;
  Results!: any;
  MovieID!: number;
  constructor
    (private route: ActivatedRoute)
    // ()
  {
    // this.route.params.subscribe(params => this.MovieID = (params['id']))
  }
  ngOnInit(): void {
    /* this.movieDetailService.GetMovieDetails(this.MovieID);
    this.Results$ = this.movieDetailService.getState();
    this.subscription.push(this.Results$.subscribe
      ((res) => {
        this.Results = res
      })
    ); */
    /* this.route.data.subscribe((res) => {
      console.log('resolvedData', res['resolvedData']);
  }); */
    
  this.Results = this.route.snapshot.data;
    console.log(this.Results)
  }
  ngOnDestroy(): void {
    this.subscription.forEach(subscription => subscription.unsubscribe())

  }
  test() {    
    console.log(this.Results)
  }
}
