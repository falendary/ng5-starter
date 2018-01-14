/**
 * Created by szhitenev on 13.01.18.
 */

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Game } from '../../models/Game';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/filter';
import { GamesService } from "../../services/games.service";


@Component({
    templateUrl: './game-page.component.html',
    selector: 'game-page',
    providers: [GamesService]
})

export class GamePageComponent implements OnInit, OnDestroy {

    public routerSub: any;
    public dataSub: any;

    public game: Game;

    constructor(private gamesService: GamesService, private route: ActivatedRoute) {

    }


    ngOnInit() {

        this.routerSub = this.route.params.subscribe(params => {

            const id = params['id'];

            this.dataSub = this.gamesService.getById(id)
                .subscribe(data => {
                    this.game = data;
                });

        });

    }

    ngOnDestroy() {
        this.routerSub.unsubscribe();
        this.dataSub.unsubscribe();
    }

}

