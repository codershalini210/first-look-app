import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-home',
  imports: [Header,Footer,Sidebar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
