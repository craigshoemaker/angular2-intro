import { Component, OnInit } from '@angular/core';

import { IMovie } from './movie.interface';
import { MoviesService } from './movies.service';
import { MoviesFilterPipe } from './movies-filter.pipe';
import { MovieCardComponent } from './movie-card.component';

@Component({
    selector: 'movies-list',
    templateUrl: 'app/movies/movies-list.component.html',
    directives: [MovieCardComponent],
    pipes: [MoviesFilterPipe]
})
export class MoviesListComponent implements OnInit {
    
    filterText: string = '';
    movies: IMovie[] = [];
    
    constructor(private _moviesService: MoviesService) { }

    ngOnInit() { 
        this.movies = this._moviesService.getAll();
    }
    
    hasMovies(): boolean {
        return this.movies.length > 0;
    } 
    
}