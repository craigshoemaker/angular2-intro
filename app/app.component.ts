import {Component} from '@angular/core';

import { MoviesListComponent } from './movies/movies-list.component';
import { MoviesService } from './movies/movies.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [MoviesListComponent],
    providers: [MoviesService]
})
export class AppComponent { }