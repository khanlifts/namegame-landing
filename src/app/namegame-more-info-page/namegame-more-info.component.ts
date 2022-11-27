import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-namegame-more-info-page',
  templateUrl: './namegame-more-info.component.html',
  styleUrls: ['./namegame-main-page.component.sass']
})
export class NamegameMoreInfoComponent {
  submittedEmail = '';
  serviceId = 'service_uhe70ub';
  templateId = 'template_6vfanrt';
  publicKey = 'R-fK7SP9Zxg98Sffz';

  public sendEmail(submittedEmail: string) {
    this.submittedEmail = submittedEmail;
    emailjs.send(
      this.serviceId, this.templateId, { email: submittedEmail }, this.publicKey)
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.error(error.text);
      });
  }
}