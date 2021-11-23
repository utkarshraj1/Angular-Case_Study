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
import { SiblingAComponent } from './feature/route-c/sibling-a/sibling-a.component';
import { SiblingBComponent } from './feature/route-c/sibling-b/sibling-b.component';
import { SiblingCComponent } from './feature/route-c/sibling-c/sibling-c.component';
import { SiblingDComponent } from './feature/route-c/sibling-d/sibling-d.component';
import { AComponentComponent } from './feature/route-d/a-component/a-component.component';
import { BComponentComponent } from './feature/route-d/b-component/b-component.component';
import { CComponentComponent } from './feature/route-d/c-component/c-component.component';
import { DComponentComponent } from './feature/route-d/d-component/d-component.component';

@NgModule({
  declarations: [
    AppComponent,
    RouteAComponent,
    RouteBComponent,
    RouteCComponent,
    RouteDComponent,
    RouteEComponent,
    RouteFComponent,
    SiblingAComponent,
    SiblingBComponent,
    SiblingCComponent,
    SiblingDComponent,
    AComponentComponent,
    BComponentComponent,
    CComponentComponent,
    DComponentComponent
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
