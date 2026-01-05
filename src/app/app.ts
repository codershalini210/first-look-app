import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfile } from './user-profile/user-profile';
import { Header } from './header/header';
import { FormsModule } from '@angular/forms';
import { Bindings } from './bindings/bindings';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UserProfile,Header,FormsModule,
    Bindings
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-look-app');

  public search_terms :string="USA"
}
