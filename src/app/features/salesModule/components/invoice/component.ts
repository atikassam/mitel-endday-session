import { Component, OnInit } from "@angular/core";
import { Store } from '@ngrx/store';




@Component({
    selector: 'app-invoice',
    templateUrl: './component.html'
})

export class InvoiceComponent implements OnInit {
    orderDetails;
    customerId;
    constructor(private store: Store<any>) {

    }

    ngOnInit() {
        this.store.select("Order").subscribe((data) => {
            console.log("data from Customer", data);
            this.orderDetails = data.Order.orderDetails.items;
            this.customerId = data.Order.orderDetails.customerid;
            // this._router.navigateByUrl("/sales/invoice");
        })
    }
}