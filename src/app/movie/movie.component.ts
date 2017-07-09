import { Component, OnInit } from '@angular/core';
import {SharedService} from './../shared.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent implements OnInit {
  id_movie = '';
  mv_Title = '';
  mv_Rated = '';
  mv_Released = '';
  mv_Director = '';
  mv_Actors = '';
  mv_Plot = '';
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }

  callMovieService() {
    this.sharedService.findMovie(this.id_movie).subscribe(
      result => {
        this.mv_Title = result['Title'];
        this.mv_Rated = result['Rated'];

        this.mv_Released = result['Released'];
        this.mv_Director = result['Director'];
        this.mv_Actors = result['Actors'];
        this.mv_Plot = result['Plot'];
      }
    );
  }
}
