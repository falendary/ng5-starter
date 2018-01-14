/**
 * Created by szhitenev on 13.01.18.
 */

import { Component, Input} from '@angular/core';
import { Game } from '../../models/Game';

@Component({
    templateUrl: './game-card.component.html',
    selector: 'game-card'
})

export class GameCardComponent {

    @Input() game: Game;

}
