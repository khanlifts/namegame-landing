import { Component } from '@angular/core';

@Component({
  selector: 'app-namegame-more-info-page',
  templateUrl: './namegame-more-info.component.html',
  styleUrls: ['./namegame-main-page.component.sass']
})
export class NamegameMoreInfoComponent {
  isFormSubmitted = false;

  onSubmittedForm(isFormSubmitted: boolean): void {
    this.isFormSubmitted = isFormSubmitted;
  }
}
