import { Component, ChangeDetectionStrategy, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    encapsulation: ViewEncapsulation.Emulated,
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor() {

    }

    ngOnInit() {

    }

}
