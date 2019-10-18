import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onClickItem() {
    this.router.navigate([`/inventory/details/${ this.item._id }`]);
  }

}
