import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouteBComponent } from './route-b.component';
import { RouteBRoutingModule } from './route-b-routing.module';



@NgModule({
  declarations: [
    RouteBComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouteBRoutingModule
  ]
})
export class RouteBModule { }
