import { Component, Input } from '@angular/core';

export interface CustomerSchema {
    id:number
    name: string,
    email: string,
    phoneno: number,
    address: string
  }

@Component({
    selector:'app-customer',
    templateUrl:'./component.html',
    styleUrls:['./component.scss']
})
export class CustomerComponent{
    @Input() customer:CustomerSchema
}