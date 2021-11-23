import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteEComponent } from './route-e.component';
import { FormsModule } from '@angular/forms';
import { RouteERoutingModule } from './route-e-routing.module';

console.log('Route E loaded');

@NgModule({
  declarations: [
    RouteEComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouteERoutingModule
  ]
})
export class RouteEModule { }
