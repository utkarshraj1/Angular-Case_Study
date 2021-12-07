import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-route-f',
  templateUrl: './route-f.component.html',
  styleUrls: ['./route-f.component.css']
})
export class RouteFComponent implements OnInit {

  @ViewChild('container') container!: ElementRef
  staticDivArr: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  count: number = 11;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll') scroll(): void {

    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
      for (var i = 0; i < 10; i++) {

        const div = this.renderer.createElement('div');
        // div.className = this.count.toString();
        this.renderer.addClass(div, this.count.toString());
        const button = this.renderer.createElement('button');
        this.renderer.addClass(button, 'btn');
        const text = this.renderer.createText(`Button ${this.count}`);
        this.renderer.listen(button, 'click', () => {
          alert(`Button in Div ${div.className} is clicked!`);
        })
        this.renderer.appendChild(button, text);

        this.renderer.appendChild(div, button);
        this.renderer.appendChild(this.container.nativeElement, div);
        this.count++;
      }
    }
  }

  alertButton(num: number): void {
    alert(`Button in Div ${num} is clicked!`);
  }
}
