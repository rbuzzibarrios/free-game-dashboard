import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {CoreModule} from "../core/core.module"
import {GamePageComponent} from "./pages/game-page/game-page.component"
import {GameRoutingModule} from "./game-routing.module"

@NgModule({
  declarations: [GamePageComponent],
  imports: [
    CommonModule,
    CoreModule,
    GameRoutingModule
  ],
  exports: [GamePageComponent]
})
export class GameModule {
}
