import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-greeting-card',
  imports: [],
  templateUrl: './greeting-card.html',
  styleUrl: './greeting-card.css',
})
export class GreetingCard {
@Input() personName:string="";
@Input() personEmail:String="";
}
