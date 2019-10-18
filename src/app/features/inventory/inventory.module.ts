import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListItemComponent } from './pages/list-item/list-item.component';
// import {ListItemComponent} from "./pages/list-item";


const routes: Routes = [
  { path: '', component: ListItemComponent }
];

@NgModule({
    declarations: [ ListItemComponent ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryModule { }
