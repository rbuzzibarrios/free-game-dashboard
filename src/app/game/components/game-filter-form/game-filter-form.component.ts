import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {GameFilters} from "../../../core/models/game-filters"
import {GamePlatformsEnum} from "../../../core/models/game-platforms-enum"
import {GameService} from "../../../core/services/game/game.service"
import {FormBuilder} from "@angular/forms"

@Component({
  selector: 'app-game-filter-form',
  templateUrl: './game-filter-form.component.html',
  styleUrls: ['./game-filter-form.component.sass']
})

export class GameFilterFormComponent implements OnInit {

  platformList = Object.values<string>(GamePlatformsEnum)
  genreList: (string | undefined)[] = []

  @Input({required: true}) filters: GameFilters | undefined = {title: '', platform: '', genre: ''}
  @Output() applyFilters: EventEmitter<GameFilters> = new EventEmitter<GameFilters>()

  gameFilterForm = this.formBuilder.group<GameFilters>({
    title: '',
    genre: '',
    platform: ''
  })

  constructor(
    private formBuilder: FormBuilder,
    private gameService: GameService
  ) {}

  ngOnInit(): void {
    this.gameService.getGenreGames().subscribe(genres =>  this.genreList = genres)
  }

  onApplyFilters(): void {
    this.applyFilters.emit(this.gameFilterForm.value as GameFilters);
  }
}
