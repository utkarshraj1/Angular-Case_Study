import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouteBComponent } from './route-b.component';
import { RouteBRoutingModule } from './route-b-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { ShortenPipe } from 'src/app/pipes/shorten.pipe';

console.log('Route B loaded');

@NgModule({
  declarations: [
    RouteBComponent,
    ShortenPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    RouteBRoutingModule
  ]
})
export class RouteBModule { }
