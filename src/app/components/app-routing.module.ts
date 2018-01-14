import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IndexPageComponent } from './index-page/index-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { GamePageComponent } from "./game-page/game-page.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', component: IndexPageComponent},
            {path: 'category/:slug', component: CategoryPageComponent},
            {path: 'game/:id', component: GamePageComponent}
        ]),
    ],
})
export class AppRoutingModule {
}
