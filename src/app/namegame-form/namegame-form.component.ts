import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

export interface SignUpFormValue {
  name: string;
  email: string;
}

@Component({
  selector: 'app-namegame-form',
  templateUrl: './namegame-form.component.html',
  styleUrls: ['./namegame-form.component.sass']
})
export class NamegameFormComponent {
  public emailField = new FormControl('', [Validators.required, Validators.email]);
  public nameField = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(80)]);
  @Output() submitClick: EventEmitter<SignUpFormValue> = new EventEmitter();

  onSubmitClick(): void {
    if (this.emailField.value && this.nameField.value) {
      this.submitClick.emit({ email: this.emailField.value, name: this.nameField.value });
    }
  }
}
