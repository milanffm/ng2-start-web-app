import { Component} from '@angular/core';
import { ContactService, IMessage } from '../core/contact.service';


@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss']
})
export class KontaktComponent  {
    title = 'Angular PHP Email Example!';
    message: IMessage = {};

    constructor(private contactService: ContactService) {

    }

    sendEmail(message: IMessage) {
        this.contactService.sendEmail(message).subscribe( res => {
            console.log('AppComponent Success', res);
        }, error => {
            console.log('AppComponent Error', error);
        });
    }
}
