import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Input() buttonLink = 'more-info'
  @Input() enableForm = false
  @Output() isFormSubmitted = new EventEmitter<boolean>();
  public submitted = false;

  onSubmitClick(): void {
    this.submitted = true;
    this.isFormSubmitted.emit(this.submitted)
  }
}
