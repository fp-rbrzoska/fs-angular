import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/data.service';
import { ContactMessage } from '../../models/contact-message';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  isMessageSent = false;
  showErrorMesssage = false;
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  send(msg: ContactMessage) {
    this.showErrorMesssage = false;
    this.dataService.sendContactMessage(msg).subscribe(
      () => this.isMessageSent = true,
      () => this.showErrorMesssage = true
    );
  }

}
