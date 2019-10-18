import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './components/checkout/component';
import { InvoiceComponent } from './components/invoice/component';


const routes: Routes = [
    { path: '', component: CheckoutComponent },
    { path: 'invoice', component: InvoiceComponent, pathMatch: "full" }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SalesRoutingModule { }
