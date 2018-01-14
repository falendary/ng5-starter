/**
 * Created by szhitenev on 13.01.18.
 */
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Injectable, Inject } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()
export class GamesService {

    constructor(private http: Http) {
    }

    getList(): Observable<any> {

        const headers = new Headers({
            'Content-Type': 'application/json',
            'CherryTech-Brand': 'cherrycasino.desktop',
            'Accept-Language': 'en-GB'
        });

        const params = {
            page_size: 20
        };

        const options = new RequestOptions({
            headers: headers,
            params: params
        });

        return this.http.get('https://staging-frontapi.cherrytech.com/games', options)
            .map(response => response.json());

    }

    getById(id: any): Observable<any> {

        const headers = new Headers({
            'Content-Type': 'application/json',
            'CherryTech-Brand': 'cherrycasino.desktop',
            'Accept-Language': 'en-GB'
        });

        const options = new RequestOptions({headers: headers});

        return this.http.get('https://staging-frontapi.cherrytech.com/games/' + id, options)
            .map(response => response.json());

    }

}
