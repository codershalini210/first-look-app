import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Themeservice {
  currentTheme:'dark' |'light' ='light';
  toggleTheme():void{
    if(this.currentTheme ==='dark')
      {
        this.currentTheme = "light"
      }
      else
      {
        this.currentTheme = "dark"
      }
    }
}
