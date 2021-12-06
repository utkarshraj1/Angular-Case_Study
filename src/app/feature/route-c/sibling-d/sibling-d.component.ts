import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sibling-d',
  templateUrl: './sibling-d.component.html',
  styleUrls: ['./sibling-d.component.css']
})
export class SiblingDComponent implements OnInit, OnChanges {

  @Input() btnTrigger!: string;
  start: number;
  pause: number;

  constructor() {
    this.start = 0;
    this.pause = 0;
  }

  ngOnInit(): void {
  }

  ngOnChanges(change: SimpleChanges) {

    // console.log(change['btnTrigger'].currentValue);
    const current = change['btnTrigger'].currentValue;
    if (current !== undefined) {
      this.incrementCount(current);
    }
  }

  incrementCount(trigger: string): void {
    if (trigger === 'Reset') {
      this.start = 0;
      this.pause = 0;
      return;
    }

    trigger === 'Start' ? this.start++ : this.pause++;
  }

}
