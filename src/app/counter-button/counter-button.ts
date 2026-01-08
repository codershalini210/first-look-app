import { Component } from '@angular/core';
import { Counter } from '../counter';
@Component({
  selector: 'app-counter-button',
  imports: [],
  templateUrl: './counter-button.html',
  styleUrl: './counter-button.css',
})
export class CounterButton {
constructor(private counterService:Counter){

}
increase()
{  
  this.counterService.increment()
}
}
