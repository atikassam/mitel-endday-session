import { Component, OnInit } from '@angular/core';
import { InventoryAction } from '../../reducers/inventory.action';
import { Store } from '@ngrx/store';

@Component({
  //selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  item:any = {}
  
  constructor(private store:Store<any>) { }

  ngOnInit() {
  }

  onAddSubmit(){
    console.log(this.item);
    this.store.dispatch(InventoryAction.AddItems({ item: this.item }));

  }

}
