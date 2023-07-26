import {Component, Input} from '@angular/core'
import {GameService} from "../../../core/services/game/game.service"
import {GameFilters} from "../../../core/models/game-filters"
import {Router} from "@angular/router"

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.sass'],
  providers: [GameService]
})
export class GameCardComponent {
  @Input({ required: true }) image_url = '';
  @Input({ required: true }) title: string | undefined = '';
  @Input({ required: true }) description = '';

  constructor(
    private router: Router,
    private gameService: GameService
  ) {}

  navigateToGameViewPage() {
    this.gameService.search({title: this.title} as GameFilters).subscribe(games => {
      if (games.length) {
        this.router.navigateByUrl(`/games/view/${games?.pop()?.id}`)
      }
    })
  }
}
