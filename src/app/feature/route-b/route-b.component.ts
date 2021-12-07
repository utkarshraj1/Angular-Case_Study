import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-route-b',
  templateUrl: './route-b.component.html',
  styleUrls: ['./route-b.component.css']
})
export class RouteBComponent implements OnInit, AfterViewInit {

  productData: Array<any>;
  isGrid: boolean;
  selectedOrder: string;
  subsHolder!: Subscription;

  private productUrl: string = 'https://fakestoreapi.com/products?limit=20'

  constructor(private shared: SharedService) {
    this.selectedOrder = 'Price - Low to High';
    this.isGrid = true;
    this.productData = [];
  }

  ngOnInit(): void {
    // this.getProductData();
  }

  ngAfterViewInit(): void {
    this.getProductData();
  }

  getProductData(): void {
    this.subsHolder = this.shared.getData(this.productUrl).subscribe((res) => {
      // console.log(res);
      this.productData = JSON.parse(JSON.stringify(res));
      this.productData.sort((a, b) => {
        return a['price'] > b['price'] ? 1 : (a['price'] < b['price']) ? -1 : 0;
      });
    });
  }

  sortProducts(): void {
    this.productData.reverse();
    // console.log(this.selectedOrder);
    // console.log(this.productData);
  }
}
