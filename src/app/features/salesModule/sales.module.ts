import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CheckoutComponent } from './components/checkout/component';
import { InvoiceComponent } from './components/invoice/component';

@NgModule({
    declarations: [
        CheckoutComponent,
        InvoiceComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: []
})
export class SalesModule { }
