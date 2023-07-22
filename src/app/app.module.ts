import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { GameModule } from "./game/game.module";
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome"

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgbModule,
    GameModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(
        faHome
    )
  }
}
