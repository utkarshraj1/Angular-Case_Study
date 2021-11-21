import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteAComponent } from './feature/route-a/route-a.component';
import { RouteBComponent } from './feature/route-b/route-b.component';
import { RouteCComponent } from './feature/route-c/route-c.component';
import { RouteDComponent } from './feature/route-d/route-d.component';
import { RouteEComponent } from './feature/route-e/route-e.component';
import { RouteFComponent } from './feature/route-f/route-f.component';

@NgModule({
  declarations: [
    AppComponent,
    RouteAComponent,
    RouteBComponent,
    RouteCComponent,
    RouteDComponent,
    RouteEComponent,
    RouteFComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
