import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./pages/home/component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inventory', loadChildren:() => import('./features/inventory/inventory.module').then(m => m.InventoryModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
