import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {GamePageComponent} from "./pages/game-page/game-page.component"
import {GameViewPageComponent} from "./pages/game-view-page/game-view-page.component"

const routes: Routes = [
  {path: 'games', component: GamePageComponent},
  {path: 'games/view/:id', component: GameViewPageComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule {
}
