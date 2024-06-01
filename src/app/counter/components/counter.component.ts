import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html'
  // template: '<h1>Hola Counter</h1>'
})

export class CounterComponent  {
  constructor() { }

  public counter: number = 10;

  public increaseBy(value : number = 1):void {
    this.counter += value;
  }

  public decreaseBy(value : number = 1):void {
    this.counter -= value;
  }

  public reset(value:number = 0):void {
    this.counter = value;
  }
}
