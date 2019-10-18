import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./pages/home/component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'customer', loadChildren: () => import('./features/customerfeature/customerfeature.module').then(e => e.CustomerModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
