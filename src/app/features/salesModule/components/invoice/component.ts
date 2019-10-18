import { Component, OnInit } from "@angular/core";
import { Store } from '@ngrx/store';




@Component({
    selector: 'app-invoice',
    templateUrl: './component.html'
})

export class InvoiceComponent implements OnInit {


    constructor(private store: Store<any>) {

    }

    ngOnInit() {
        this.store.select("Order").subscribe((data) => {
            console.log("data", data);
            // this._router.navigateByUrl("/sales/invoice");
        })
    }
}