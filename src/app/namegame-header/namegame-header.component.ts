import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-namegame-header',
  templateUrl: './namegame-header.component.html',
  styleUrls: ['./namegame-header.component.sass']
})
export class NamegameHeaderComponent {
  @Input() routerLink: string = '';
}
