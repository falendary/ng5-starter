/**
 * Created by szhitenev on 14.01.18.
 */
import { ComponentFixture, TestBed, async} from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearchControlComponent } from './search-control.component';

describe('SearchControl', () => {

    let comp: SearchControlComponent;
    let fixture: ComponentFixture<SearchControlComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                ReactiveFormsModule,

                MatAutocompleteModule,
                MatInputModule,
                MatFormFieldModule
            ],
            providers: [],
            declarations: [SearchControlComponent], // declare the test component
        }).compileComponents();

        fixture = TestBed.createComponent(SearchControlComponent);

        comp = fixture.componentInstance; // component test instance

    }));

    it('should be initialized', () => {
        expect(fixture).toBeDefined();
        expect(comp).toBeDefined();
    });


});
