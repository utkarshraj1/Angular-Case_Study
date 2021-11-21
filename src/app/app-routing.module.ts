import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteAComponent } from './feature/route-a/route-a.component';
import { RouteBComponent } from './feature/route-b/route-b.component';
import { RouteCComponent } from './feature/route-c/route-c.component';
import { RouteDComponent } from './feature/route-d/route-d.component';
import { RouteEComponent } from './feature/route-e/route-e.component';
import { RouteFComponent } from './feature/route-f/route-f.component';

const routes: Routes = [
  { path: 'route-a', component: RouteAComponent },
  { path: 'route-b', component: RouteBComponent },
  { path: 'route-c', component: RouteCComponent },
  { path: 'route-d', component: RouteDComponent },
  { path: 'route-e', component: RouteEComponent },
  { path: 'route-f', component: RouteFComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
