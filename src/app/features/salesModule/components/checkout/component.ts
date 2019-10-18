import { Component, Input, OnInit } from "@angular/core";
import { ItemDetailsSchema } from '../../shared/item.interface';
import { MatInputModule } from '@angular/material/input';
import { getItemListService } from '../../services/getItemListApi.services';
import { ItemDetailsComponent } from 'src/app/features/inventory/pages/item-details/item-details.component';
import { Router, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { OrderAction } from '../../reducers/reducers/actions';


@Component({
    selector: 'app-checkout',
    templateUrl: './component.html',
    styleUrls: ['./component.scss']
})

export class CheckoutComponent implements OnInit {

    //@Input() items: ItemDetailsSchema;


    itemsList = [];

    constructor(private getItemListService: getItemListService, private _router: Router, private store: Store<any>) {

    }

    ngOnInit() {
        // this.getItemListService.getitemList().subscribe((data: any) => {
        //     console.log("data", data);
        //     this.itemsList = data
        // })

        // this.cartTotal();
    }

    addItem(name, price, count) {
        this.itemsList.push({
            "name": name,
            "price": price,
            "count": count
        })
    }

    checkOut() {
        this.store.dispatch(OrderAction.StoreOrderData({ orderDetails: this.itemsList }))
        this._router.navigateByUrl("/sales/invoice");
    }


    // cartTotal() {
    //     if (this.itemsList.length !== 0) {
    //         this.itemsList.reduce(function (total, item) {
    //             total += (item.price * item.count);
    //             console.log("total", total)
    //         }, 0)

    //     }
    // };




}