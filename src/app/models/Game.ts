import { TimezoneDate } from './TimezoneDate';
/**
 * Created by szhitenev on 13.01.18.
 */
export class Game {

    id: string;

    name: string;
    description: string;

    thumbnail: string;
    background: string;

    width: string;
    height: string;

    enabled: boolean;
    login_required: boolean;

    url: string;
    slug: string;

    vendor: string;

    jurisdiction: string;

    rating: number;
    volatility: number;

    created_at: TimezoneDate;

    constructor(data: any) {

        const keys = Object.keys(data);

        for (let i = 0; i < keys.length; i = i + 1) {
            this[keys[i]] = data[keys[i]];
        }

    }

}