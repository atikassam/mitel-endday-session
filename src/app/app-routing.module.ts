import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./pages/home/component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'app', loadChildren: () => import('./features/app/app.module').then((m => m.ApplicationModule )) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
