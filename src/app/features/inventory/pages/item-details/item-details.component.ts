import { Component, OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ListItemComponent } from '../list-item/list-item.component';

interface ItemDetailSchema {
  [key: string]: any
  name: string,
  price: number,
  quantity: number
}
@Component({
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})

export class ItemDetailsComponent implements OnInit {
  public items: ItemDetailSchema[] = [
    {
      _id: 1,
      name: "Mobile",
      price: 7000,
      quantity: 5000,
      desription: "Item 1"
    },
    {
      _id: 2,
      name: "Laptop",
      price: 50000,
      quantity: 500,
      desription: "Item 2"
    },
    {
      _id: 3,
      name: "Desktop",
      price: 30000,
      quantity: 1000,
      desription: "Item 3"
    }
  ]
  @Input() id:string;
  private item: ItemDetailSchema;
  constructor(private router:ActivatedRoute, ) { }

  ngOnInit() {
    this.router.params.subscribe((value=>this.getItemDetailsById(value.id)));
  }
  getItemDetailsById(id:number){
    this.item = this.items[id-1];
  }

}
