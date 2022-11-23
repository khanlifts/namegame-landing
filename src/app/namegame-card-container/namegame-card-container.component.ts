import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-namegame-card',
  templateUrl: './namegame-card-container.component.html',
  styleUrls: ['./namegame-card-container.component.sass']
})
export class NamegameCardContainerComponent {
  @Input() rotateLeft = false;
  @Input() rotateRight = false;
}
