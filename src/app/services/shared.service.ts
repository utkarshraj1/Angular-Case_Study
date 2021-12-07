import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IStudent } from 'src/assets/model/student';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  btnTrigger = new Subject<string>();
  countDownValue = new Subject<any>();
  currentCountValue = new Subject<any>();

  constructor(private http: HttpClient) { }

  getTime(): string {
    let date = new Date();
    let hr: any = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    hr = hr < 10 ? '0' + hr : hr;
    let min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    let sec = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    let suffix = date.getHours() >= 12 ? 'PM' : 'AM';

    return hr + ':' + min + ':' + sec + ' ' + suffix;
  }

  getData(url: string): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(url);
  }
}
