import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bindings',
  imports: [FormsModule],
  templateUrl: './bindings.html',
  styleUrl: './bindings.css',
})
export class Bindings {
  username:string="John"
  isEnabled : boolean =false
  imgsrc:string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKUxiY3CHfyGGgwhLRkBdKoEmb4lxIOgarRQ&s"
  changename()
  {
    this.username = "Ron"
  }

}
