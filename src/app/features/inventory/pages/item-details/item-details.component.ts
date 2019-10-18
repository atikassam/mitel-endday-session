import { Component, OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  @Input() item
  constructor(private router:ActivatedRoute) { }

  ngOnInit() {
    //this.router.params.subscribe((value=>))
  }

}
