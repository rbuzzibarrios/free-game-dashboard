import {Component, Input, OnInit} from '@angular/core'
import {GameService} from "../../../core/services/game/game.service"
import {Game} from "../../../core/models/game"

@Component({
  selector: 'app-game-view-page',
  templateUrl: './game-view-page.component.html',
  styleUrls: ['./game-view-page.component.sass'],
  providers: [GameService]
})
export class GameViewPageComponent implements OnInit{
  @Input() id: number | undefined = undefined

  game: Game | undefined = undefined;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    if (this.id) {
      this.gameService
          .getGameById(this.id as number)
          .subscribe((game: Game) => this.game = game)
    }
  }
}
