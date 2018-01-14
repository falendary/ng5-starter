import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule, RouteReuseStrategy } from '@angular/router';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { CategoriesService } from '../services/categories.service';
import { GamesService } from '../services/games.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { IndexPageComponent } from './index-page/index-page.component';
import { CategoriesComponent } from './categories/categories.component';

import { GameCardComponent } from './game-card/game-card.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { SearchControlComponent } from './search-control/search-control.component';
import { GamePageComponent } from './game-page/game-page.component';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule,
        HttpModule,

        MatButtonModule,
        MatCheckboxModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatToolbarModule,
        MatSidenavModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatIconModule,

        AppRoutingModule
    ],
    declarations: [
        AppComponent,

        HeaderComponent,
        FooterComponent,

        IndexPageComponent,
        CategoryPageComponent,
        GamePageComponent,

        CategoriesComponent,

        SearchControlComponent,

        GameCardComponent
    ],
    providers: [
        CategoriesService,
        GamesService
    ],

})
export class AppModule {
}

export { AppComponent } from './app.component';
