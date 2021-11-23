import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-sibling-a',
  templateUrl: './sibling-a.component.html',
  styleUrls: ['./sibling-a.component.css']
})
export class SiblingAComponent implements OnInit {

  @Input() countDown!: number;
  @Input() btnTrigger!: string;
  @Output() currentTimedValue: EventEmitter<number> = new EventEmitter();

  timerValue: any;
  timeInterval: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    const currentBtn = changes['btnTrigger'].currentValue;
    const currentCount = changes['countDown'].currentValue;

    if (currentCount !== undefined || currentBtn !== undefined) {
      this.timerValue = currentCount;
      if (this.timeInterval !== undefined) { this.timeInterval.unsubscribe(); }
      this.timer();
    }
  }

  timer(): void {
    // throw new Error(a'Method not implemented.');
    this.timeInterval = interval(1000).subscribe((res: any) => {
      // console.log(res);
      if (this.timerValue <= 0 || this.btnTrigger !== 'Start') {
        console.log('timer interval and stopped/resetted');
        this.cancelTimer();
      }
      else {
        this.timerValue -= 1;
        this.currentTimedValue.emit(this.timerValue);
      }
    });
  }

  cancelTimer(): void {
    this.timeInterval.unsubscribe();
    console.log('Unsubscribing timerinterval');
    if (this.btnTrigger === 'Reset') { this.timerValue = 0; }
  }

}
