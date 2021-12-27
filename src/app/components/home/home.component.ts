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
  Result$!: Observable<movieLists_resp>;
  Result!: movieLists_resp;
  constructor(private movieService: MovieService) { }

  tiles: Tile[] = [
    { cols: 4, rows: 70, color: '#000' },
    { cols: 4, rows: 40, color: 'gray' },
  ];

  ngOnInit(): void {
    this.movieService.GetMovieLists("popular");
    this.Result$ = this.movieService.getState();
    this.subscription.push(this.Result$.subscribe
      ((res) => {
        this.Result = res
      })
    );
  }
  ngOnDestroy(): void {
    this.subscription.forEach(subscription => subscription.unsubscribe())

  }

}
