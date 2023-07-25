import { Component, OnInit } from '@angular/core'
import { Game } from "../../../core/models/game"
import { GameService } from "../../../core/services/game/game.service"
import {GameFilters} from "../../../core/models/game-filters"

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.sass'],
  providers: [GameService]
})
export class GamePageComponent implements OnInit {

  gameList: Game[] = []

  gameFilters: GameFilters | undefined = undefined

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getGames().subscribe((games) => this.gameList = games.slice(0, 9))
  }
}
