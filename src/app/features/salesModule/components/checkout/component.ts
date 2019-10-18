import { Component, Input, OnInit } from "@angular/core";
import { ItemDetailsSchema } from '../../shared/item.interface';
import { MatInputModule } from '@angular/material/input';
import { getItemListService } from '../../services/getItemListApi.services';


@Component({
    selector: 'app-checkout',
    templateUrl: './component.html',
    styleUrls: ['./component.scss']
})

export class CheckoutComponent implements OnInit {

    @Input() items: ItemDetailsSchema;


    itemsList: ItemDetailsSchema;

    constructor(private getItemListService: getItemListService) {

    }

    ngOnInit() {
        this.getItemListService.getitemList().subscribe((data: any) => {
            console.log("data", data);
            this.itemsList = data
        })
    }

}