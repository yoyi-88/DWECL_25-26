import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  standalone: false,
  templateUrl: './calc.html',
  styleUrl: './calc.css',
})
export class Calc {
  public number1 : number=0;
  public number2 : number=0;
  public resultado: number=0;
  constructor() { }
  ngOnInit(): void {}
  public suma(){
    this.resultado = this.number1 + this.number2;
  }  
  public resta() {
    this.resultado = this.number1 - this.number2;
  }
  public multiplicacion() {
    this.resultado = this.number1 * this.number2;
  }
  public division() {
    this.resultado = this.number1 / this.number2;
  }

}
