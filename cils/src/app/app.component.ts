import { Component } from '@angular/core';
import { AppService, IMessage } from './app.service';
import { error } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DM cils';
  message: IMessage = {};

  constructor(private appService : AppService){

  }

  sendEmail(message : IMessage){
    console.log(message.email + message.message +message.name);
    this.appService.sendEmail(message).subscribe(res => {
      console.log('success', res);
    }, error => {
      console.log('error', error);
    })
  }
}
