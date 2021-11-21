import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteAComponent } from './feature/route-a/route-a.component';
import { RouteBComponent } from './feature/route-b/route-b.component';

const routes: Routes = [
  { path: 'route-a', component: RouteAComponent },
  { path: 'route-b', component: RouteBComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
