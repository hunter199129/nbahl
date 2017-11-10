import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TeamSelectorServices {

    constructor(private http: Http) {
        // let obj;
        // this.getTeamFromJSON().subscribe(data => obj = data, error => console.log(error));
    }

    getTeamFromJSON(): Observable<any> {
        return this.http.get('/assets/data/teams.json')
            .map((res: any) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.of<any>();
            });
    }
}
