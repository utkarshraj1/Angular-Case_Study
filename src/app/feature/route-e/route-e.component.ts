import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';
import { IStudent } from 'src/assets/model/student';

@Component({
  selector: 'app-route-e',
  templateUrl: './route-e.component.html',
  styleUrls: ['./route-e.component.css']
})
export class RouteEComponent implements OnInit {

  subscribeData!: Subscription;
  keys!: any[];
  studentMarks: IStudent[] = [];
  selectedKey: string = '';
  isDesc: boolean = true;
  clickCount: number = 0;

  constructor(private shared: SharedService) { }

  ngOnInit(): void {
    this.subscribeData = this.shared.getData().subscribe((res) => {
      console.log('Subscription started');
      // console.log(res);
      this.studentMarks = res;

      this.keys = Object.keys(this.studentMarks[0])
      console.log(this.keys);
      // console.log(this.studentMarks);
    });
  }

  ngOnDestroy(): void {
    console.log('Unsubscription happening in OnDestroy');
    this.subscribeData.unsubscribe();
  }

  sortUsing(key: string): void {
    if (this.selectedKey !== key) {
      this.selectedKey = key;
    }
    this.isDesc = !this.isDesc;
    this.clickCount++;
    console.log(this.clickCount);
    // if (this.clickCount === 3 && this.selectedKey === key) {
    //   this.selectedKey = '';
    //   this.isDesc = true;
    //   this.clickCount = 0;
    // }
  }
}
