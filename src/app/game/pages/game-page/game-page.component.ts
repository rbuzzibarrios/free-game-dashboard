import {Component, OnInit} from '@angular/core'
import {Game} from "../../../core/models/game"
import {GameService} from "../../../core/services/game/game.service"

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.sass'],
  providers: [GameService]
})
export class GamePageComponent implements OnInit {

  gameList: Game[] = []

  constructor(private gameService: GameService) {
  }

  ngOnInit() {
    this.gameService.getGames().subscribe((games) => this.gameList = games)
  }

}
