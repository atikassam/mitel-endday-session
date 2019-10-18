import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./pages/home/component";
import {AuthGuard} from "./services/auth.guard";

const routes: Routes = [
  { path: 'app', loadChildren: () => import('./features/app/app.module').then((m => m.ApplicationModule )) },
  {
    path: '',
    canActivate: [ AuthGuard ],
    children: [
      { path: '', component: HomeComponent },
      { path: 'inventory', loadChildren:() => import('./features/inventory/inventory.module').then(m => m.InventoryModule) },
      { path: 'customers', loadChildren: () => import('./features/customerfeature/customerfeature.module').then(e => e.CustomerModule) },
      { path: 'sales', loadChildren: () => import('./features/salesModule/sales.module').then(e => e.SalesModule) },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
