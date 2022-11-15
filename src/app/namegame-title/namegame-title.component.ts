import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-namegame-title',
  templateUrl: './namegame-title.component.html',
  styleUrls: ['./namegame-title.component.sass']
})
export class NamegameTitleComponent {
  @Input() title = ''
  @Input() subTitle = ''
  @Input() buttonTitle = ''
  @Input() buttonType = 'orange'
}
