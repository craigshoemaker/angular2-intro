import { Component, OnInit } from '@angular/core';

import { MovieCardComponent } from './movie-card.component';
import { MoviesFilterPipe } from './movies-filter.pipe';
import { IMovie } from './movie.interface';
import { MoviesService } from './movies.service';

@Component({
    selector: 'movies-list',
    templateUrl: 'app/movies/movies-list.component.html',
    directives: [MovieCardComponent],
    pipes: [MoviesFilterPipe]
})
export class MoviesListComponent implements OnInit {
    
    filterText: string = '';
    movies: IMovie[] = [];
    selected: string = '';
    
    hasMovies(): boolean {
        return this.movies.length > 0;
    } 
    
    constructor(private _moviesService: MoviesService) { }

    ngOnInit() { 
        this.movies = this._moviesService.getAll();
    }
    
    onSelected(movie: IMovie) {
        this.selected = movie.name;
    }
}