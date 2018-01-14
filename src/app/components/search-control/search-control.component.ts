import { Component, OnChanges, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs/Observable';

import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

import 'rxjs/add/operator/debounceTime';

@Component({
    selector: 'search-control',
    templateUrl: 'search-control.component.html'
})
export class SearchControlComponent implements OnChanges, OnDestroy {

    searchCtrl: FormControl;
    filteredItems: Observable<any[]>;

    public limit: number = 10;

    @Input() querySub: any;
    @Input() public items: any;

    @Input() placeholder: string = '';

    @Input() query: string;

    @Output() queryChange: EventEmitter<string> = new EventEmitter();

    constructor() {

    }

    filterItems(name: string) {

        return this.items
            .filter(item => item.name.toLowerCase().indexOf(name.toLowerCase()) === 0)
            .filter((item, index) => index < this.limit).slice();

    }

    ngOnChanges() {

        this.searchCtrl = new FormControl(this.query);

        const queryObs = this.searchCtrl.valueChanges
            .debounceTime(400);

        this.querySub = queryObs.subscribe(val => {

            this.query = <string>val;

            this.queryChange.emit(this.query);

        });

        this.filteredItems = queryObs
            .pipe(
                startWith(''),
                map(() => {
                    if (this.query) {
                        return this.filterItems(this.query);
                    } else {
                        return this.items.filter((item, index) => index < this.limit).slice();
                    }
                }));
    }

    ngOnDestroy() {
        this.querySub.unsubscribe();
    }

}