import { Component,Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-postcard',
  imports: [],
  templateUrl: './postcard.html',
  styleUrl: './postcard.css',
})
export class Postcard {
 @Input() postcode :string="";
@Input()  area :string =""
@Output() mapRequested  = new EventEmitter<string>()
onShowMap()
{
  this.mapRequested.emit(this.postcode)
}
}
