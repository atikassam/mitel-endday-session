import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListItemComponent } from './pages/list-item/list-item.component';
import { ItemComponent } from './components/item/item.component';
import { CommonModule } from '@angular/common';
import {ItemDetailsComponent} from './pages/item-details/item-details.component';


const routes: Routes = [
  { path: '', component: ListItemComponent },
  {path: 'details/:id', component: ItemDetailsComponent}
];

@NgModule({
    declarations: [ ListItemComponent, ItemComponent, ItemDetailsComponent  ],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class InventoryModule { }
