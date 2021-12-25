import { Component, OnInit } from '@angular/core';
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
export class HomeComponent implements OnInit {

  constructor() { }
  tiles: Tile[] = [
    { cols: 4, rows: 35, color: '#000' },
    { cols: 4, rows: 20, color: 'lightgreen' },
  ];

  ngOnInit(): void {
  }

}
