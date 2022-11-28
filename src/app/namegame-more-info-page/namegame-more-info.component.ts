import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { SignUpFormValue } from '../namegame-form/namegame-form.component';

@Component({
  selector: 'app-namegame-more-info-page',
  templateUrl: './namegame-more-info.component.html',
  styleUrls: ['./namegame-main-page.component.sass']
})
export class NamegameMoreInfoComponent implements OnInit {
  submittedEmail = '';
  submittedName = '';
  serviceId = 'service_uhe70ub';
  templateId = 'template_6vfanrt';
  publicKey = 'R-fK7SP9Zxg98Sffz';

  public sendEmail(signUpFormValue: SignUpFormValue) {
    this.submittedEmail = signUpFormValue.email;
    this.submittedName = signUpFormValue.name;
    this.scrollToTop();
    emailjs.send(
      this.serviceId, this.templateId, { email: this.submittedEmail, name: this.submittedName }, this.publicKey)
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.error(error.text);
      });
  }

  private scrollToTop(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  ngOnInit() {
    this.scrollToTop();
  }
}
