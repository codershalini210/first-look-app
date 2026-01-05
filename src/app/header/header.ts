import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
heading:string="IBM lorem ipsum"
isLoggedIn:boolean=false
login()
{
this.isLoggedIn = true
}
}