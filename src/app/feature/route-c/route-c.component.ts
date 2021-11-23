import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-c',
  templateUrl: './route-c.component.html',
  styleUrls: ['./route-c.component.css']
})
export class RouteCComponent implements OnInit {

  countDownValue: number;
  buttonTrigger!: string;
  currentTimerValue!: number;

  constructor() {
    this.countDownValue = 0;
  }

  ngOnInit(): void {
  }

  buttonValue(event: string): void {
    this.buttonTrigger = event;
    console.log(event);
  }

  countDown(event: number): void {
    this.countDownValue = event;
    console.log(event);
  }

  currentTimed(event: number): void {
    this.currentTimerValue = event;
    console.log(event);
  }

}
