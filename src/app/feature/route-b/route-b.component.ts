import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-b',
  templateUrl: './route-b.component.html',
  styleUrls: ['./route-b.component.css']
})
export class RouteBComponent implements OnInit {

  productPrice: Array<number> = [
    3902, 1263, 7924, 2013, 3519, 2617, 3707, 1735, 5026, 2826, 6590, 2373, 5563,
    2978, 2673, 7313, 3113, 5893, 7947, 5599,
    2889, 1398, 1384, 2161, 4491, 6669, 2692, 7443,
    1365, 4444, 2657, 4182, 4344, 3670, 5177, 3132, 6695, 4782, 5775, 6315
  ];
  isGrid: boolean;
  selectedOrder: string;
  productPriceShow: any = [];

  constructor() {
    this.selectedOrder = 'Price - Low to High';
    this.isGrid = true;
  }

  ngOnInit(): void {
    this.sortPrices();
  }

  sortPrices() {
    this.productPriceShow = [];
    this.selectedOrder === 'Price - Low to High' ? this.productPriceShow = this.productPrice.sort()
      : this.productPriceShow = this.productPrice.sort().reverse();
  }

}
