import { Component, OnInit } from '@angular/core';
import { CustomerSchema } from '../../components/customer/component';
import { Store } from '@ngrx/store';
import { CustomerActions } from '../../reducers/customer.actions';
import * as _ from 'lodash'
import { map } from 'rxjs/operators';
@Component({
    selector:'',
    templateUrl:'./component.html',
    styleUrls:['./component.scss']
})
export class CustomerListComponent implements OnInit{
    customers:CustomerSchema[]
    constructor(private store:Store<any>){}
    ngOnInit(): void {
        this.store.dispatch(CustomerActions.GetCustomers());

        this.store.select('customer')
        .pipe(map((state) => _.get(state, 'customer.all_customers'))).subscribe((all_customers) => {
            this.customers=all_customers
      })

    }

    onDelete(event)
    {
        console.log(event+" customer is deleting from list")
        this.store.dispatch(CustomerActions.DeleteCustomer({id:event}))
    }
    /* customers:CustomerSchema[] = [
        {
            id:1,
            name:"customer1",
            email:"email1",
            phoneno:1234567890,
            address:"addres1"
        },
        {
            id:2,
            name:"customer2",
            email:"email2",
            phoneno:2234567890,
            address:"addres2"
        }
    ] */
}