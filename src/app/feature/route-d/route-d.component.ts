import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-d',
  templateUrl: './route-d.component.html',
  styleUrls: ['./route-d.component.css']
})
export class RouteDComponent implements OnInit {

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
