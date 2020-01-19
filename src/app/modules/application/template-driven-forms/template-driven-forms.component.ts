import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {
  movie = new Movie();

  constructor() {
    this.movie.name = 'Avengers : Endgame';
    this.movie.releaseDate = '04/04/2019';
    this.movie.domestic = 858373000;
    this.movie.international = 2797800564;
    this.movie.worldwide = 2797800564;
  }

  ngOnInit() {
  }

}
