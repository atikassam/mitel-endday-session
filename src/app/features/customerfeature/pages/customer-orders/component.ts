import { Component, OnInit } from '@angular/core';
import { CustomerSchema } from '../../components/customer/component';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { CustomerActions } from '../../reducers/customer.actions';
import { map } from 'rxjs/operators';
import * as _ from 'lodash'
import { Location } from '@angular/common';

@Component({
    selector:'',
    templateUrl:'./component.html',
    styleUrls:['./component.scss']
})
export class CustomerOrdersComponent implements OnInit{
   
    customer:CustomerSchema={
        id:1,
        name:"customer1",
        email:"email1",
        phoneno:1234567890,
        address:"addres1"
    }

    customerorders:any=[
        {
            id:1,
            date:"10/01/2019",
            totalprice:"1000"
        },
        {
            id:2,
            date:"12/02/2019",
            totalprice:"2000"
        }
    ]
    constructor(private store:Store<any>,private router: ActivatedRoute,private locaton:Location){}
    ngOnInit(): void {
        this.router.params.subscribe((value => {

            this.store.select('customer')
            .pipe(map((state) => _.get(state, 'customer.selected_customer'))).subscribe((selected_customer) => {
                this.customer=selected_customer
            })

            this.store.select('customer')
            .pipe(map((state) => _.get(state, 'customer.customer_all_orders'))).subscribe((customer_all_orders) => {
                this.customerorders=customer_all_orders
            })

            this.store.dispatch(CustomerActions.GetCustomer({ id: value.id }));
            this.store.dispatch(CustomerActions.GetCustomerOrders({ id: value.id }))
          }))
    }

    onBackClick(){
        this.locaton.back();
    }
}