/**
 * Created by szhitenev on 13.01.18.
 */
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, OnDestroy} from '@angular/core';
import { CategoriesService } from '../../services/categories.service';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Category } from '../../models/Category';

@Component({
    templateUrl: './categories.component.html',
    selector: 'categories',
    providers: [CategoriesService]
})

export class CategoriesComponent implements OnInit, OnDestroy {

    public dataSub: any;

    public categories: Category[];

    constructor(private categoriesService: CategoriesService) {

    }

    ngOnInit() {

        this.dataSub = this.categoriesService.getList()
            .map(data => data._embedded.game_categories)
            .subscribe(data => this.categories = data);

    }

    ngOnDestroy() {
        this.dataSub.unsubscribe();
    }

}
