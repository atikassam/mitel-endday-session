import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListItemComponent } from './pages/list-item/list-item.component';
import { ItemComponent } from './components/item/item.component';
import { CommonModule } from '@angular/common';
//import {ListItemComponent} from "./pages/list-item";


const routes: Routes = [
  { path: '', component: ListItemComponent }
];

@NgModule({
    declarations: [ ListItemComponent, ItemComponent ],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class InventoryModule { }
