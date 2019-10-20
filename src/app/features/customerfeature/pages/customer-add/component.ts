import { Component, OnInit } from '@angular/core';
import { CustomerSchema } from '../../components/customer/component';
import { CustomerActions } from '../../reducers/customer.actions';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

@Component({
    selector:'',
    templateUrl:'./component.html',
    styleUrls:['./component.scss']
})
export class CustomerAddComponent implements OnInit{
    
    customer: any
    constructor(private store:Store<any>,public router: Router,private activatedRouter: ActivatedRoute){}
    isaddform:boolean=true;
    ngOnInit(): void {
        this.activatedRouter.params.subscribe((value => {
            this.store.dispatch(CustomerActions.GetCustomer({ id: value.customerid }));
            if(value.customerid)
            {
                this.isaddform=true;
                this.store.select('customer')
                .pipe(map((state) => _.get(state, 'customer.selected_customer'))).subscribe((selected_customer) => {
                this.customer=Object.assign({},selected_customer)
                })
            }
            else
            {
                this.customer={};
                this.isaddform=false;
            }
          }))
    }

    onSubmit() {
       this.store.dispatch(CustomerActions.addCustomer({customer: this.customer }))
       this.router.navigate(['/customers/list']) 
    }
    
    onUpdate() {
        this.store.dispatch(CustomerActions.UpdateCustomer({customer: this.customer }))
        this.router.navigate(['/customers/list']) 
     }
}