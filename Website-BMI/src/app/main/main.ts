import { Component} from '@angular/core'
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-main',
  imports: [FormsModule],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {

 height = 0;
 weight = 0;
 result = 0;

  bmi(){
    this.result = this.weight / (this.height * this.height);
  }

}