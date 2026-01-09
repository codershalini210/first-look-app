import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// './greeting-card/greeting-card';
import { CommonModule } from '@angular/common';
import { Themeservice } from './themeservice';
@Component({
  selector: 'app-root',
    imports:[CommonModule,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  constructor(private themeService:Themeservice)
  {
  }
  gettheme()
  {
    return this.themeService.currentTheme;
  }
  toggletheme()
  {
    this.themeService.toggleTheme()
  }
  
}
