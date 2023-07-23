import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.sass']
})
export class GameCardComponent {
  @Input({ required: true }) image_url: string = '';
  @Input({ required: true }) title: string  = '';
  @Input({ required: true }) description: string  = '';
}
