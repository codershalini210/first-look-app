import { Component ,Input,Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-greeting-card',
  imports: [],
  templateUrl: './greeting-card.html',
  styleUrl: './greeting-card.css',
})
export class GreetingCard {
@Input() personName:string="";
@Input() personEmail:String="";
@Output() personSelected = new EventEmitter<string>();
onSelect()
{
  this.personSelected.emit(this.personName)
}
}
