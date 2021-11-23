import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  getTime(): string {
    let date = new Date();
    let hr: any = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    hr = hr < 10 ? '0' + hr : hr;
    let min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    let sec = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    let suffix = date.getHours() >= 12 ? 'PM' : 'AM';

    return hr + ':' + min + ':' + sec + ' ' + suffix;
  }
}
