import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {CoreModule} from "../core/core.module"
import {GamePageComponent} from "./pages/game-page/game-page.component"
import {GameRoutingModule} from "./game-routing.module"
import {GameCardComponent} from "./components/game-card/game-card.component"
import {GameFilterFormComponent} from "./components/game-filter-form/game-filter-form.component"
import {ReactiveFormsModule} from "@angular/forms"
import {GameViewPageComponent} from "./pages/game-view-page/game-view-page.component"
import {NgSelectComponent} from "@ng-select/ng-select"

@NgModule({
  declarations: [
    GamePageComponent,
    GameCardComponent,
    GameFilterFormComponent,
    GameViewPageComponent,
    NgSelectComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    GameRoutingModule,
    ReactiveFormsModule
  ],
  exports: [GamePageComponent, GameFilterFormComponent]
})
export class GameModule {
}
