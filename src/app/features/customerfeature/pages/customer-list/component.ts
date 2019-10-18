import { Component } from '@angular/core';
import { CustomerSchema } from '../../components/customer/component';
@Component({
    selector:'',
    templateUrl:'./component.html',
    styleUrls:['./component.scss']
})
export class CustomerListComponent{
    customers:CustomerSchema[] = [
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
    ]
}