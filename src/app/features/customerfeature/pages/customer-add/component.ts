import { Component } from '@angular/core';
import { CustomerSchema } from '../../components/customer/component';
import { CustomerActions } from '../../reducers/customer.actions';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
    selector:'',
    templateUrl:'./component.html',
    styleUrls:['./component.scss']
})
export class CustomerAddComponent{
    customer: any={} 
    constructor(private store:Store<any>,public router: Router){}
    onSubmit() {
       this.store.dispatch(CustomerActions.addCustomer({customer: this.customer }))
       this.router.navigate(['/customers/list']) 
    }
}