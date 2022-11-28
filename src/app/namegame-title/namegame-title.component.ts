import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SignUpFormValue } from '../namegame-form/namegame-form.component';

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
  @Output() submittedFormValue = new EventEmitter<SignUpFormValue>();
  public submitted = false;

  onSubmitClick(signupFormValue: SignUpFormValue): void {
    this.submitted = true;
    this.submittedFormValue.emit(signupFormValue)
  }
}
