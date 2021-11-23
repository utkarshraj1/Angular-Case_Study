import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteFComponent } from './route-f.component';
import { FormsModule } from '@angular/forms';
import { RouteFRoutingModule } from './route-f-routing.module';



@NgModule({
  declarations: [
    RouteFComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouteFRoutingModule
  ]
})
export class RouteFModule { }
