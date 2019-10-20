import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { CustomerActions } from '../../reducers/customer.actions';


export interface CustomerSchema {
    id:number,
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
    constructor(private store:Store<any>){}
    @Output() onDeleteCustomer:EventEmitter<any>=new EventEmitter<any>();
    onDelete()
    {
        this.onDeleteCustomer.emit(this.customer.id)
    }
}