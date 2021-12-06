import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'App-Case-Study';

  ngOnInit(): void {
    console.log('Created by Utkarsh');
  }

  @HostListener('window:scroll') parentScroll(): void {
    let header = document.querySelector('.nav-bar');
    header?.classList.toggle('sticky-class', window.scrollY > 0);
  }
}
