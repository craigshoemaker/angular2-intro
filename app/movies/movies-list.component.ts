import { Component } from '@angular/core';

@Component({
    selector: 'movies-list',
    templateUrl: 'app/movies/movies-list.component.html'
})
export class MoviesListComponent {
    
    movies: any[] = [
        { name: 'The Matrix', genre: 'action', imgUrl: 'the-matrix.png' },
        { name: 'A Few Good Men', genre: 'drama', imgUrl: 'a-few-good-men.png' },
        { name: 'Ant-Man', genre: 'action', imgUrl: 'ant-man.png' },
        { name: 'Dumb and Dumber', genre: 'comedy', imgUrl: 'dumb-and-dumber.png' },
        { name: 'Good Will Hunting', genre: 'drama', imgUrl: 'good-will-hunting.png' },
        { name: 'So I Married an Axe Murderer', genre: 'comedy', imgUrl: 'so-i-married-an-axe-murderer.png' }
    ];
    
    hasMovies(): boolean {
        return this.movies.length > 0;
    } 
    
}