import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./pages/home/component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sales', loadChildren: () => import('./features/salesModule/sales.module').then(e => e.SalesModule) }
  // { path: 'sales', loadChildren: 'features/salesModule/sales.module/#SalesModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
