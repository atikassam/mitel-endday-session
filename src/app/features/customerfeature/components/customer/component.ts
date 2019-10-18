import { Component, Input } from '@angular/core';


@Component({
    selector:'app-customer',
    templateUrl:'./component.html',
    styleUrls:['./component.scss']
})
export class CustomerComponent{
    @Input() customer
}