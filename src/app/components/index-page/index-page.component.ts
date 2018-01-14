/**
 * Created by szhitenev on 13.01.18.
 */

import { Component, OnInit, OnDestroy } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { Game } from '../../models/Game';

import { Observable } from 'rxjs/Observable';

@Component({
    templateUrl: './index-page.component.html',
    selector: 'index-page',
    providers: [GamesService]
})

export class IndexPageComponent implements OnInit, OnDestroy {

    public dataSub: any;

    public games: Game[];
    public gamesProjection: Game[];

    public query: string;

    public itemsPerPage: number = 20;

    constructor(private gamesService: GamesService) {

    }

    public updateFilters(): void {

        this.gamesProjection =
            this.games
                .filter(game => game.name.toLowerCase().indexOf(this.query.toLowerCase()) === 0)
                .filter((game, index) => index < this.itemsPerPage);
    }

    ngOnInit() {

        this.dataSub = this.gamesService.getList()
            .map(data => data._embedded.games)
            .subscribe(data => {
                this.games = data;
                this.gamesProjection = this.games.filter((game, index) => index < this.itemsPerPage);

                console.log(this.gamesProjection);

            });

    }

    ngOnDestroy() {
        this.dataSub.unsubscribe();
    }

}

