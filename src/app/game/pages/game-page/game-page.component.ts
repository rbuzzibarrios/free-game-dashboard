import { Component, OnInit } from '@angular/core'
import { Game } from "../../../core/models/game"
import { GameService } from "../../../core/services/game/game.service"

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.sass'],
  providers: [GameService]
})
export class GamePageComponent implements OnInit {

  gameList: Game[] = []

  constructor(private gameService: GameService) { }

  ngOnInit() {
    console.log(this.gameService.getGenreGames().subscribe((genres) => console.log(genres)));

    this.gameService.getGames().subscribe((games) => this.gameList = games.slice(0, 9))
  }
}
