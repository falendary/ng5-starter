/**
 * Created by szhitenev on 13.01.18.
 */

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Game } from '../../models/Game';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/filter';
import { CategoriesService } from '../../services/categories.service';

@Component({
    templateUrl: './category-page.component.html',
    selector: 'category-page',
    providers: [CategoriesService]
})

export class CategoryPageComponent implements OnInit, OnDestroy {

    public dataSub: any;

    public games: Game[];
    public gamesProjection: Game[];

    public query: string;

    public itemsPerPage: number = 20;

    private routerSub: any;

    constructor(private categoriesService: CategoriesService, private route: ActivatedRoute) {

    }

    public updateFilters(): void {

        this.gamesProjection =
            this.games
                .filter(game => game.name.toLowerCase().indexOf(this.query.toLowerCase()) === 0)
                .filter((game, index) => index < this.itemsPerPage);
    }

    ngOnInit() {

        this.routerSub = this.route.params.subscribe(params => {

            const slug = params['slug'];

            this.gamesProjection = [];
            this.games = [];
            this.query = '';

            this.dataSub = this.categoriesService.getList(slug)
                .map(data => data._embedded.games)
                .subscribe(data => {
                    this.games = data;
                    this.gamesProjection = this.games.filter((game, index) => index < this.itemsPerPage);

                    console.log('data', this.gamesProjection);

                });
        });

    }

    ngOnDestroy() {
        this.routerSub.unsubscribe();
        this.dataSub.unsubscribe();
    }

}

