import { Component} from '@angular/core'
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-main',
  imports: [FormsModule],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {

 height:number | null = null;
 weight:number | null = null;
 result:number = 0;
 view:number = 0;
 answer:String = '';

  bmi(): void{
    
    
    if((this.height == null || this.weight == null) || (this.height == 0 || this.weight == 0)){
      this.result = 0;
      this.answer = "Źle wprowadzone dane";
    } else {
      this.result = this.weight! / Math.pow(this.height!, 2);
      this.view = this.result;

      if(this.result < 16.0){
        this.answer = "wygłodzenie";
      } else if (this.result >= 16.0 && this.result <= 16.99){
        this.answer = "wychudzenie";
      } else if (this.result >= 17.0 && this.result <= 18.49){
        this.answer = "niedowaga";
      } else if (this.result >= 18.5 && this.result <= 24.99){
        this.answer = "wartość prawidłowa";
      } else if (this.result >= 25.0 && this.result <= 29.99){
        this.answer = "nadwaga";
      } else if (this.result >= 30.0 && this.result <= 34.99){
        this.answer = "I stopień otyłości";
      } else if (this.result >= 35.0 && this.result <= 39.99){
        this.answer = "II stopień otyłości";
      } else if (this.result >= 40.0){
        this.answer = "III stopień otyłości";
      } else {
        this.answer = "Źle wprowadzone dane";
      }
    }

    

  }

}