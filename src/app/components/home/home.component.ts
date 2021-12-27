import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { movieLists_resp } from 'src/app/core/models/stateModel/stateModels';
import { MovieService } from 'src/app/services/movie.service';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription: Subscription[] = [];
  Results$!: Observable<movieLists_resp>;
  Results!: movieLists_resp;
  constructor(private movieService: MovieService) { }

  tiles: Tile[] = [
    { cols: 4, rows: 70, color: '#000' },
    { cols: 4, rows: 40, color: 'gray' },
  ];

  ngOnInit(): void {
    this.movieService.GetMovieLists("popular");
    this.Results$ = this.movieService.getState();
    this.subscription.push(this.Results$.subscribe
      ((res) => {
        this.Results = res
      })
    );
  }
  ngOnDestroy(): void {
    this.subscription.forEach(subscription => subscription.unsubscribe())

  }

}
