import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Main } from './main/main';
import { Footer } from './footer/footer';
import { Information } from './information/information';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Main, Information,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
