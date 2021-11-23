import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteAComponent } from './route-a.component';
import { FormsModule } from '@angular/forms';
import { RouteARoutingModule } from './route-a-routing.module';



@NgModule({
  declarations: [
    RouteAComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouteARoutingModule
  ]
})
export class RouteAModule { }
