/**
 * Created by szhitenev on 13.01.18.
 */
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Injectable, Inject } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()
export class CategoriesService {

    constructor(private http: Http) {
    }

    getList(slug?: string): Observable<any> {

        const headers = new Headers({
            'Content-Type': 'application/json',
            'CherryTech-Brand': 'cherrycasino.desktop',
            'Accept-Language': 'en-GB'
        });

        const options = new RequestOptions({headers: headers});

        let observable: Observable<any>;

        if (slug) {
            observable = this.http.get('https://staging-frontapi.cherrytech.com/game-categories/' + slug, options);
        } else {
            observable = this.http.get('https://staging-frontapi.cherrytech.com/game-categories', options);
        }

        return observable.map(response => response.json());

    }

}
