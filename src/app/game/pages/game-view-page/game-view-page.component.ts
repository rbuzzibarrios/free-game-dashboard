import {Component, Input} from '@angular/core'

@Component({
  selector: 'app-game-view-page',
  templateUrl: './game-view-page.component.html',
  styleUrls: ['./game-view-page.component.sass']
})
export class GameViewPageComponent {
  @Input() id: number | undefined = undefined
}
