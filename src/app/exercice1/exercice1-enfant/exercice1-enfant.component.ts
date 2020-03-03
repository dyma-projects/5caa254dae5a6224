import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  counterValue: number = 0;
  @Input('result') result: number;
  @Output() counterChange = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  increment() {
    this.counterValue += 1;
    this.counterChange.emit({
      value: this.counterValue
    })
  }

  decrement() {
    this.counterValue -= 1;
    this.counterChange.emit({
      value: this.counterValue
    })
  }
}
