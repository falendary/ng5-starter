/**
 * Created by szhitenev on 14.01.18.
 */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement, NgModule }    from '@angular/core';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IndexPageComponent } from './index-page.component';
import { SearchControlComponent } from '../search-control/search-control.component';
import { GameCardComponent } from '../game-card/game-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';
import { Game } from '../../models/Game';
import { CategoryPageComponent } from '../category-page/category-page.component';
import { GamePageComponent } from '../game-page/game-page.component';

import { APP_BASE_HREF } from '@angular/common';

// polyfill specific to angular material 5 problem
Object.defineProperty(document.body.style, 'transform', {value: () => ({enumerable: true, configurable: true})});

describe('IndexPage', () => {

    let comp: IndexPageComponent;
    let fixture: ComponentFixture<IndexPageComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                ReactiveFormsModule,
                RouterModule,
                HttpModule,
                BrowserAnimationsModule,

                MatCardModule,
                MatProgressSpinnerModule,
                MatAutocompleteModule,
                MatInputModule,

                RouterModule.forRoot([
                    {path: '', component: IndexPageComponent},
                ]),

            ],
            providers: [{provide: APP_BASE_HREF, useValue: '/'}],
            declarations: [
                GameCardComponent,
                GamePageComponent,
                CategoryPageComponent,
                SearchControlComponent,
                IndexPageComponent], // declare the test component
        }).compileComponents();

        fixture = TestBed.createComponent(IndexPageComponent);

        comp = fixture.componentInstance; // component test instance

    }));

    it('should be initialized', () => {
        expect(fixture).toBeDefined();
        expect(comp).toBeDefined();
    });

    it('gamesProjection should be 20', () => {

        comp.games = [];
        comp.query = '';
        for (let i = 0; i < 99; i = i + 1) {
            comp.games[i] = new Game({name: i + ''});
        }

        comp.updateFilters();

        fixture.detectChanges();

        expect(comp.gamesProjection.length).toEqual(20);
    });

});
