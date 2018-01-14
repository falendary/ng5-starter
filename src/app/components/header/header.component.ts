/**
 * Created by szhitenev on 13.01.18.
 */

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    templateUrl: './header.component.html',
    selector: 'header-component'
})

export class HeaderComponent {

    @Output() navToggle = new EventEmitter<boolean>();

    navOpen() {
        this.navToggle.emit(true);
    }

}
