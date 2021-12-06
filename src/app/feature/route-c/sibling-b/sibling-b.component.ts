import {
  Component, Input, OnInit, Output, EventEmitter,
  SimpleChanges, ViewChild, ElementRef, Renderer2
} from '@angular/core';

@Component({
  selector: 'app-sibling-b',
  templateUrl: './sibling-b.component.html',
  styleUrls: ['./sibling-b.component.css']
})
export class SiblingBComponent implements OnInit {

  @Input() currentCounterStop: any;
  @Output() buttonTriggered: EventEmitter<string> = new EventEmitter<string>();
  @Output() countDown: EventEmitter<number> = new EventEmitter<number>();
  @ViewChild('pause') pauseEl!: ElementRef;

  timerValue: number;
  clickCount: number = 1;
  internalTimerValue: number;

  constructor(private renderer: Renderer2) {
    this.timerValue = 0;
    this.internalTimerValue = this.timerValue;
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const current = changes['currentCounterStop'].currentValue;

    if (current !== undefined) {
      this.internalTimerValue = current;
    }
  }

  startAndStop(): void {

    if (this.clickCount === 1) {
      this.internalTimerValue = this.timerValue;
      this.countDown.emit(this.internalTimerValue);
    }

    if (this.clickCount % 2 === 0) {
      // console.log(`Stop ${this.clickCount}`);
      // Stop
      const message = `Paused at ${this.internalTimerValue}`;
      this.appendElement(message);
      this.buttonTriggered.emit('Stop');
      this.countDown.emit(this.internalTimerValue);

    }
    else if (this.clickCount % 2 !== 0) {
      // console.log(`Start ${this.clickCount}`);
      // Start
      this.countDown.emit(this.internalTimerValue);
      this.buttonTriggered.emit('Start');
    }
    this.clickCount++;
  }

  reset() {
    this.clickCount = 1;
    this.timerValue = 0;
    this.internalTimerValue = 0;

    const div = document.getElementById('pause');
    while (div?.firstChild) {
      div.removeChild(div.firstChild);
    }

    this.buttonTriggered.emit('Reset');
    this.countDown.emit(0);
  }

  appendElement(message: string) {
    const strong = this.renderer.createElement('strong');
    const br = this.renderer.createElement('br');
    const text = this.renderer.createText(message);
    this.renderer.appendChild(strong, text);
    this.renderer.appendChild(this.pauseEl.nativeElement, strong);
    this.renderer.appendChild(this.pauseEl.nativeElement, br);
  }

}
