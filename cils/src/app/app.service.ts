import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Message } from './message';
 

@Injectable()
export class AppService {
  private emailUrl = '/assets/email.php';
 
  constructor(private http: Http) {
 
  }
 
  sendEmail(message: Message): Observable<Message> | any {
    return this.http.post(this.emailUrl, message)
      .map(response => {
        console.log('Sending email was successfull', response);
        return response;
      })
      .catch(error => {
        console.log('Sending email got error', error);
        return Observable.throw(error)
      })
  }
}