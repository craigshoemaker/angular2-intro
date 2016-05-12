import { Component, Input, Output, EventEmitter } from '@angular/core';

import { IMovie } from './movie.interface';

@Component({
    selector: 'movie-card',
    templateUrl: 'app/movies/movie-card.component.html',
    styleUrls: ['app/movies/movie-card.component.css']
})
export class MovieCardComponent {
    @Input() movie: IMovie;
    
}