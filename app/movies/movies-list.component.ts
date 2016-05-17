import { Component, OnInit } from '@angular/core';

import { IMovie } from './movie.interface';
import { MoviesService } from './movies.service';

@Component({
    selector: 'movies-list',
    templateUrl: 'app/movies/movies-list.component.html'
})
export class MoviesListComponent implements OnInit {
    
    movies: IMovie[] = [];
    
    constructor(private _moviesService: MoviesService) { }

    ngOnInit() { 
        this.movies = this._moviesService.getAll();
    }
    
    /* add service to app.component.ts */
    
    hasMovies(): boolean {
        return this.movies.length > 0;
    } 
    
}