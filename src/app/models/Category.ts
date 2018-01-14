/**
 * Created by szhitenev on 13.01.18.
 */

import { Game } from './Game';

export class Category {
    name: string;
    order: number;
    slug: string;

    _embedded: Game[];
}