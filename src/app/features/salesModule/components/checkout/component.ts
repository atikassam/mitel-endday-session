import { Component, Input } from "@angular/core";
import { ItemDetailsSchema } from '../../shared/item.interface';
import { MatInputModule } from '@angular/material/input';



@Component({
    selector: 'app-checkout',
    templateUrl: './component.html'
})

export class CheckoutComponent {

    @Input() items: ItemDetailsSchema


}