import { Component, OnInit } from '@angular/core';
import { interval, ObservableInput, skipWhile, Subscription, take, takeUntil } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-a-component',
  templateUrl: './a-component.component.html',
  styleUrls: ['./a-component.component.css']
})
export class AComponentComponent implements OnInit {
  btnTrigger!: string;

  timerValue: any;
  timeInterval!: Subscription;

  constructor(private shared: SharedService) { }

  ngOnInit(): void {

    this.shared.countDownValue.subscribe((res) => {
      console.log('countDownValue subscribed in a-component');
      this.timerValue = res;
    });

    this.shared.btnTrigger.subscribe((res) => {
      console.log('btnTrigger subscribed in a-component');
      this.btnTrigger = res;
      if (this.timeInterval !== undefined) { this.timeInterval.unsubscribe(); }
      this.timer();
    })
  }

  timer(): void {
    this.timeInterval = interval(1000).subscribe((res: any) => {
      if (this.timerValue <= 0 || this.btnTrigger !== 'Start') {
        console.log('timer interval and stopped/resetted');
        this.cancelTimer();
      }
      else {
        this.timerValue -= 1;
        console.log('timer is changing and value emitted');
        this.shared.currentCountValue.next(this.timerValue);
      }
    });
  }

  cancelTimer(): void {
    console.log('Unsubscription Happening');
    this.timeInterval.unsubscribe();
    if (this.btnTrigger === 'Reset') { this.timerValue = 0; }
  }

  ngOnDestry() {
    console.log('Unsubscription Happening');
    this.timeInterval.unsubscribe();
  }
}
