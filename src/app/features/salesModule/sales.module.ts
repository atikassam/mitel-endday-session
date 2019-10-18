import { NgModule } from '@angular/core';
import { CheckoutComponent } from './components/checkout/component';
import { InvoiceComponent } from './components/invoice/component';
import { SalesRoutingModule } from './sales-routing.module';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from './shared/material-modules.module';

@NgModule({
    declarations: [
        CheckoutComponent,
        InvoiceComponent
    ],
    imports: [
        CommonModule,
        SalesRoutingModule,
        DemoMaterialModule
    ],
    providers: []
})
export class SalesModule { }
