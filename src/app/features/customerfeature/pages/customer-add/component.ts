import { Component } from '@angular/core';
import { CustomerSchema } from '../../components/customer/component';
import { CustomerActions } from '../../reducers/customer.actions';
import { Store } from '@ngrx/store';
@Component({
    selector:'',
    templateUrl:'./component.html',
    styleUrls:['./component.scss']
})
export class CustomerAddComponent{
    customer: any={} 
    constructor(private store:Store<any>){}
    onSubmit() {
        console.log(this.customer, 'com')
       // this.store.dispatch(MyAuthAction.Login({ credentials: this.credential }))
       this.store.dispatch(CustomerActions.addCustomer({customer: this.customer }))
      }
}