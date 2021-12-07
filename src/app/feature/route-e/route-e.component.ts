import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';
import { ISortOrder } from 'src/assets/model/SortOrder';
import { IStudent } from 'src/assets/model/student';

@Component({
  selector: 'app-route-e',
  templateUrl: './route-e.component.html',
  styleUrls: ['./route-e.component.css']
})
export class RouteEComponent implements OnInit {

  subscribeData!: Subscription;
  keys: string[];
  studentMarks: IStudent[] = [];
  sortedStudentMarks: IStudent[];
  sortOrderArr: Array<ISortOrder>;

  private marksUrl: string = '../../assets/config/marks.json';

  constructor(private shared: SharedService) {
    this.keys = [];
    this.sortedStudentMarks = [];
    this.sortOrderArr = [];
  }

  ngOnInit(): void {
    this.subscribeData = this.shared.getData(this.marksUrl).subscribe((res) => {
      // console.log('Subscription started');
      // console.log(res);
      this.studentMarks = JSON.parse(JSON.stringify(res));
      this.sortedStudentMarks = this.studentMarks;
      this.keys = Object.keys(this.studentMarks[0]);

      this.keys.forEach(k => {
        this.sortOrderArr.push({
          key: k,
          sorting: 1
        });
      });
      // console.log(this.sortOrderArr);
      // console.log(this.keys);
    });
  }

  ngOnDestroy(): void {
    // console.log('Unsubscription happening in OnDestroy');
    this.subscribeData.unsubscribe();
  }

  sortUsing(key: string): void {
    const obj = this.sortOrderArr.find(o => {
      return o.key === key;
    });
    // console.log(obj);
    if (obj?.sorting === 1) {
      this.sortedStudentMarks = this.sortBy(this.studentMarks, key);
    }
    else if (obj?.sorting === 2) {
      this.sortedStudentMarks = this.sortBy(this.studentMarks, key).reverse();
    }
    else if (obj?.sorting === 3) {
      this.sortedStudentMarks = this.studentMarks;
    }
    this.assignSortingToKey(key);
    // console.log(this.sortedStudentMarks, this.studentMarks);
    // console.log(this.sortOrderArr);
  }

  sortBy = function (arr: any, p: any) {
    return arr.slice(0).sort(function (a: any, b: any) {
      return (a[p] > b[p]) ? 1 : (a[p] < b[p]) ? -1 : 0;
    });
  }

  assignSortingToKey(key: string) {
    this.sortOrderArr.forEach(o => {
      if (o.key === key && o.sorting !== 3) { o.sorting++; }
      else { o.sorting = 1; }
    });
  }
}
