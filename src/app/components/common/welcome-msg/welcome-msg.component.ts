import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.scss']
})
export class WelcomeMsgComponent {
  inviteMessage: string = "*Join us on QZed* - the ultimate academic Q&A platform.\nBe the first to know when we launch!\n\n*Subscribe here*: https://qzedanswers.web.app/";

  sendWhatsAppMessage(): void {
    const encodedMessage = encodeURIComponent(this.inviteMessage);
    const whatsappLink = `https://wa.me/?text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');
  }
}
