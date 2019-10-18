import { Component } from '@angular/core';
import { CustomerSchema } from '../../components/customer/component';
@Component({
    selector:'',
    templateUrl:'./component.html',
    styleUrls:['./component.scss']
})
export class CustomerAddComponent{
    customer: any={} 

    onSubmit() {
        console.log(this.customer, 'com')
       // this.store.dispatch(MyAuthAction.Login({ credentials: this.credential }))
      }
}