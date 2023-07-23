import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.sass']
})
export class GameCardComponent {
  @Input({ required: true }) image_url = '';
  @Input({ required: true }) title = '';
  @Input({ required: true }) description = '';
}
