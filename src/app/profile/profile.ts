import { Component } from '@angular/core';
import { Userservice } from '../userservice';
@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
constructor(public userservice:Userservice)
{

}

}
