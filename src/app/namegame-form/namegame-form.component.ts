import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-namegame-form',
  templateUrl: './namegame-form.component.html',
  styleUrls: ['./namegame-form.component.sass']
})
export class NamegameFormComponent {
  public emailField = new FormControl('', [Validators.required, Validators.email]);
  @Output() submitClick: EventEmitter<string> = new EventEmitter();

  onSubmitClick(): void {
    if (this.emailField.value) {
      this.submitClick.emit(this.emailField.value);
    }
  }
}
