import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfile } from './user-profile/user-profile';
import { Header } from './header/header';
import { FormsModule } from '@angular/forms';
import { Bindings } from './bindings/bindings';
import { Home } from './home/home';
import { GreetingCard } from './greeting-card/greeting-card';
import { CommonModule } from '@angular/common';
import { Postcard } from './postcard/postcard';
import { Counter } from './counter/counter';
import { Todo } from './todo/todo';
import { Pipechallenge } from './pipechallenge/pipechallenge';
// import { NgForOf } from "../../node_modules/@angular/common/types/_common_module-chunk";
@Component({
  selector: 'app-root',
  // imports: [Counter,Postcard,CommonModule,Home, RouterOutlet, UserProfile, Header, FormsModule,
  //   Bindings, GreetingCard],
  imports:[RouterOutlet,Todo,Pipechallenge],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
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
