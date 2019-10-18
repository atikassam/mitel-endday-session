import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  inventory:any = {}
  
  constructor() { }

  ngOnInit() {
  }

  onAddSubmit(){
    console.log(this.inventory);
  }

}
