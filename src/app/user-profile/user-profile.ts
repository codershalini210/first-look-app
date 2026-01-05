import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  imports: [],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile {
  name :string ="Ron Capner"
  email :string = "Ron@outlook.com"
  location :string ="Manchester"
  age:number =36
  joinedOn :Date = new Date(2021,4,16)

  fun1(){
    alert("hello from angular event binding")
  }
}
