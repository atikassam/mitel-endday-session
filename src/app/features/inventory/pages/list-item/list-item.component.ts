import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getItemListService } from 'src/app/features/salesModule/services/getItemListApi.services';
import { InventoryAction } from '../../reducers/inventory.action';
import * as _ from 'lodash'
import {map} from "rxjs/operators";

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
  public items: any;
  constructor(private store:Store<any>) { }

  ngOnInit() {
    this.store.select('inventory')
      .pipe(map((d) => _.get(d, 'inventoryreducer.selected_item_list')))
      .subscribe((data) => {
        console.log(data);
        if (data) {
          this.items = data.items;
        }
      })
    this.store.dispatch(InventoryAction.GetItems());
    
  }

}
