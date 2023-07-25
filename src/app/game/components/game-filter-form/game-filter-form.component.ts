import {Component, Input, OnInit} from '@angular/core'
import {GameFilters} from "../../../core/models/game-filters"
import {GamePlatformsEnum} from "../../../core/models/game-platforms-enum"
import {GameService} from "../../../core/services/game/game.service"

@Component({
  selector: 'app-game-filter-form',
  templateUrl: './game-filter-form.component.html',
  styleUrls: ['./game-filter-form.component.sass']
})
export class GameFilterFormComponent implements OnInit {

  platformList = Object.values<string>(GamePlatformsEnum)
  genreList: (string | undefined)[] = []

  @Input({required: true}) filters: GameFilters | undefined = {title: '', platform: '', genre: ''}

  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
    this.gameService.getGenreGames().subscribe(genres =>  this.genreList = genres)
  }


}
