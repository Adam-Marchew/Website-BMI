import { Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [FormsModule, NgOptimizedImage],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {

  height:number | null = null;
  weight:number | null = null;
  result:number | null = null;
  view:number | null = null;
  answer:String = '';
  risk:String = '';

  bmi(): void{
    
    
    if((this.height == null || this.weight == null) || (this.height == 0 || this.weight == 0)){
      this.result = 0;
      this.answer = "Źle wprowadzone dane";
      this.risk = "Źle wprowadzone dane";
    } else {
      this.result = this.weight! / Math.pow(this.height!, 2);
      this.view = this.result;

      if(this.result < 16.0){
        this.answer = "wygłodzenie";
        this.risk = "minimalne, ale zwiększony poziom wystąpienia innych problemów zdrowotnych";
      } else if (this.result >= 16.0 && this.result <= 16.99){
        this.answer = "wychudzenie";
        this.risk = "minimalne, ale zwiększony poziom wystąpienia innych problemów zdrowotnych";
      } else if (this.result >= 17.0 && this.result <= 18.49){
        this.answer = "niedowaga";
        this.risk = "minimalne, ale zwiększony poziom wystąpienia innych problemów zdrowotnych";
      } else if (this.result >= 18.5 && this.result <= 24.99){
        this.answer = "wartość prawidłowa";
        this.risk = "minimalne";
      } else if (this.result >= 25.0 && this.result <= 29.99){
        this.answer = "nadwaga";
        this.risk = "średnie";
      } else if (this.result >= 30.0 && this.result <= 34.99){
        this.answer = "otyłość I stopnia";
        this.risk = "wysokie";
      } else if (this.result >= 35.0 && this.result <= 39.99){
        this.answer = "otyłość II stopnia";
        this.risk = "bardzo wysokie";
      } else if (this.result >= 40.0){
        this.answer = "otyłość III stopnia";
        this.risk = "ekstremalny poziom ryzyka";
      } else {
        this.answer = "Źle wprowadzone dane";
        this.risk = "Źle wprowadzone dane";
        this.view = 0;
      }
    }

    

  }

}