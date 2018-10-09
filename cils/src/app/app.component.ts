import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Message } from './message';
import { Constantes } from './constantes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DM cils';
  message: Message = {};

  messageEmail = '';

  constructor(private appService: AppService) {

  }

  sendEmail(message: Message) {
    message.emailSource = Constantes.email;
    console.log(message.emailSource + message.message + message.name);
    this.appService.sendEmail(message).subscribe(res => {
      console.log('success', res);
      this.messageEmail = 'Email envoyé avec succès. Vous allez recevoir une réponse dans un bref délais.';
    }, error => {
      console.log('error', error);
      this.messageEmail = 'Echec d\'envoi du mail, veuillez-nous contacter par Facebook ou Instragram s\'il vous plaît.';
    })
  }
}
