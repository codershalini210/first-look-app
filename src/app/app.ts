import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfile } from './user-profile/user-profile';
import { Header } from './header/header';
import { FormsModule } from '@angular/forms';
import { Bindings } from './bindings/bindings';
import { Home } from './home/home';
import { GreetingCard } from './greeting-card/greeting-card';
import { CommonModule } from '@angular/common';
import { Todo } from './todo/todo';
import { CurrencyPipe } from '@angular/common';
import { InitialsPipe } from './initials-pipe';
import { CounterButton } from './counter-button/counter-button';
import { CounterDisplay } from './counter-display/counter-display';
import { Pipechallenge } from './pipechallenge/pipechallenge';
@Component({
  selector: 'app-root',
imports:[CounterButton,CounterDisplay,InitialsPipe,RouterOutlet,Todo,Pipechallenge,CommonModule,CurrencyPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isLoggedin = true
  countries =["c1","c2","c3","c4"]
   productPrice = 99.99
//   selectedPerson:string="";
//   protected readonly title = signal('first-look-app');
// persons =[
//   {name:"Ron",email:"Ron@outlook.com"},
//   {name:"John",email:"John@outlook.com"},
//   {name:"Maria",email:"maria@gmail.com"},
//   {name:"Joseph",email:"Joseph@outlook.com"}
// ]
// setSelected(name:string){
//   this.selectedPerson = name
// }
// showOnMap(postcode:string){
//   alert("post code is "+postcode)
// }
// public search_terms :string="USA"
}
