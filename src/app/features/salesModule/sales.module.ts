import { NgModule } from '@angular/core';
import { CheckoutComponent } from './components/checkout/component';
import { InvoiceComponent } from './components/invoice/component';
import { SalesRoutingModule } from './sales-routing.module';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../../shared/material-modules.module';
import { getItemListService } from './services/getItemListApi.services';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './reducers/reducers';

@NgModule({
    declarations: [
        CheckoutComponent,
        InvoiceComponent
    ],
    imports: [
        CommonModule,
        SalesRoutingModule,
        SharedModule,
        DemoMaterialModule,
        FormsModule,
        StoreModule.forFeature("Order", reducers),
        EffectsModule.forFeature([])
    ],
    providers: [getItemListService]
})
export class SalesModule { }
