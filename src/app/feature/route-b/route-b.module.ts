import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouteBComponent } from './route-b.component';
import { RouteBRoutingModule } from './route-b-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';

console.log('Route B loaded');

@NgModule({
  declarations: [
    RouteBComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    RouteBRoutingModule
  ]
})
export class RouteBModule { }
