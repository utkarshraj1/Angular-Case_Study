import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll') parentScroll(): void {
    let header = document.querySelector('.nav-bar');
    header?.classList.toggle('sticky-class', window.scrollY > 0);
  }

}
