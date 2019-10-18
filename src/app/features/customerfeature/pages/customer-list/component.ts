import { Component } from '@angular/core';

@Component({
    selector:'',
    templateUrl:'./component.html',
    styleUrls:['./component.scss']
})
export class CustomerListComponent{
    customers = [
        {
            name:"customer1",
            email:"email1",
            phoneno:1234567890,
            address:"addres1"
        },
        {
            name:"customer2",
            email:"email2",
            phoneno:2234567890,
            address:"addres2"
        }
    ]
}