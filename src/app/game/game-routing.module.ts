import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {GamePageComponent} from "./pages/game-page/game-page.component"

const routes: Routes = [
  {path: 'games', component: GamePageComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule {
}
