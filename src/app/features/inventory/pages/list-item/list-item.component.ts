import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getItemListService } from 'src/app/features/salesModule/services/getItemListApi.services';
import { InventoryAction } from '../../reducers/inventory.action';

interface ItemSchema {
  [key: string]: any
  name: string,
  price: number,
  quantity: number
}

@Component({
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})


export class ListItemComponent implements OnInit {
  public items: ItemSchema[] = [
    {
      _id: 1,
      name: "Mobile",
      price: 7000,
      quantity: 5000
    },
    {
      _id: 2,
      name: "Laptop",
      price: 50000,
      quantity: 500
    },
    {
      _id: 3,
      name: "Desktop",
      price: 30000,
      quantity: 1000
    }
  ]
  constructor(private store:Store<any>) { }

  ngOnInit() {
    this.store.dispatch(InventoryAction.GetItems);
    
  }

}
