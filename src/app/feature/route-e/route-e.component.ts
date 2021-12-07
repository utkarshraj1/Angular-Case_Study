import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-route-e',
  templateUrl: './route-e.component.html',
  styleUrls: ['./route-e.component.css']
})
export class RouteEComponent implements OnInit {

  subscribeData!: Subscription;
  keys!: any[];
  studentMarks: any[] = [];
  selectedKey: string = '';
  isDesc: boolean = true;
  clickCount: number = 0;
  sortedStudentMarks!: any[];

  private marksUrl: string = '../../assets/config/marks.json';

  constructor(private shared: SharedService) { }

  ngOnInit(): void {
    this.subscribeData = this.shared.getData(this.marksUrl).subscribe((res) => {
      // console.log('Subscription started');
      // console.log(res);
      this.studentMarks = JSON.parse(JSON.stringify(res));
      this.sortedStudentMarks = this.studentMarks;
      this.keys = Object.keys(this.studentMarks[0]);
      // console.log(this.keys);
    });
  }

  ngOnDestroy(): void {
    // console.log('Unsubscription happening in OnDestroy');
    this.subscribeData.unsubscribe();
  }

  sortUsing(key: string): void {
    this.clickCount++;
    if (this.selectedKey !== key) {
      this.selectedKey = key;
    }

    if (this.clickCount === 1) {
      this.sortedStudentMarks = this.sortBy(this.studentMarks, key);
    }
    else if (this.clickCount === 2) {
      this.sortedStudentMarks = this.reverseSortBy(this.studentMarks, key);
    }
    else if (this.clickCount === 3) {
      this.sortedStudentMarks = this.studentMarks;
      this.clickCount = 0;
    }
    // console.log(this.sortedStudentMarks, this.studentMarks);
  }

  sortBy = function (arr: any, p: any) {
    return arr.slice(0).sort(function (a: any, b: any) {
      return (a[p] > b[p]) ? 1 : (a[p] < b[p]) ? -1 : 0;
    });
  }

  reverseSortBy = function (arr: any, p: any) {
    return arr.slice(0).sort(function (a: any, b: any) {
      return (a[p] > b[p]) ? -1 : (a[p] < b[p]) ? 1 : 0;
    });
  }
}
