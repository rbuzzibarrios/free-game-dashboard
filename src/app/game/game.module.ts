import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {CoreModule} from "../core/core.module"
import {GamePageComponent} from "./pages/game-page/game-page.component"
import {GameRoutingModule} from "./game-routing.module"
import {GameCardComponent} from "./components/game-card/game-card.component"

@NgModule({
  declarations: [GamePageComponent, GameCardComponent],
  imports: [
    CommonModule,
    CoreModule,
    GameRoutingModule
  ],
  exports: [GamePageComponent]
})
export class GameModule {
}
