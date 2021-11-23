import {
  Component, OnInit, ViewChild, ElementRef, Renderer2
} from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-b-component',
  templateUrl: './b-component.component.html',
  styleUrls: ['./b-component.component.css']
})
export class BComponentComponent implements OnInit {

  @ViewChild('pause') pauseEl!: ElementRef;

  timerValue: number;
  clickCount: number = 1;

  constructor(private renderer: Renderer2, private shared: SharedService) {
    this.timerValue = 0;
  }

  ngOnInit(): void {
    this.shared.currentCountValue.subscribe((res) => {
      console.log('current count subscribed in b component');
      this.timerValue = res;
    });
  }

  startAndStop(): void {

    if (this.clickCount === 1) {
      console.log('countdown value emitted in b component');
      this.shared.countDownValue.next(this.timerValue);
    }

    if (this.clickCount % 2 === 0) {
      const message = `Paused at ${this.timerValue}`;
      this.appendElement(message);

      console.log('btnTrigger value Stop emitted in b component');
      this.shared.btnTrigger.next('Stop');

    }
    else if (this.clickCount % 2 !== 0) {
      console.log('btnTrigger value Start emitted in b component');
      this.shared.btnTrigger.next('Start');
    }
    this.clickCount++;
  }

  reset() {
    this.clickCount = 1;
    this.timerValue = 0;
    this.shared.btnTrigger.next('Reset');

    const div = document.getElementById('pause');
    while (div?.firstChild) {
      div.removeChild(div.firstChild);
    }
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
