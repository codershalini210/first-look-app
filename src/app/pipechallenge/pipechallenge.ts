import { UpperCasePipe,DatePipe,CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
// inport UpperCasePipe
@Component({
  selector: 'app-pipechallenge',
  imports: [UpperCasePipe,DatePipe,CurrencyPipe],
  templateUrl: './pipechallenge.html',
  styleUrl: './pipechallenge.css',
})
export class Pipechallenge {
eventDate = new Date(2026,8,18)
ticketPrice=45.60;
eventName="Angular Workshop"
attendees =12356
}
