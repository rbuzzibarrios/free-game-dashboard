import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {GameRoutingModule} from "./game/game-routing.module"

const routes: Routes = []

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
