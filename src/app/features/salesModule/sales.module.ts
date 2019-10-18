import { NgModule } from '@angular/core';
import { CheckoutComponent } from './components/checkout/component';
import { InvoiceComponent } from './components/invoice/component';
import { SalesRoutingModule } from './sales-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        CheckoutComponent,
        InvoiceComponent
    ],
    imports: [
        CommonModule,
        SalesRoutingModule
    ],
    providers: []
})
export class SalesModule { }
