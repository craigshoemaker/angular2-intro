import {Component} from '@angular/core';

import { MoviesListComponent } from './movies/movies-list.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [MoviesListComponent]
})
export class AppComponent { }