import { PipeTransform, Pipe } from '@angular/core';
import { IMovie } from './movie.interface';

@Pipe({
    name: 'moviesFilter'
})
export class MoviesFilterPipe implements PipeTransform {
    
    isMatch(value: string, filter: string) {
        return value.toLocaleLowerCase().indexOf(filter) != -1;
    }
    
    transform(value: IMovie[], args: string) : IMovie[] {
        let filter: string = args ? args.toLocaleLowerCase() : null;
        
        return filter ? value.filter((movie: IMovie) => { 
            let nameMatch = this.isMatch(movie.name, filter);
            let genreMatch = this.isMatch(movie.genre, filter);
            return nameMatch || genreMatch;
        }) : value;
    }
}