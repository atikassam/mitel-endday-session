import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAddComponent } from './pages/customer-add/component';
import { CustomerListComponent } from './pages/customer-list/component';
import { CustomerOrdersComponent } from './pages/customer-orders/component';
import { CustomerComponent } from './components/customer/component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { SharedModule } from 'src/app/shared/shared.module';

const routes:Routes=[
    { path:"",component:CustomerListComponent },
    { path:"add",component:CustomerAddComponent },
    { path:"list",component:CustomerListComponent },
    { path:"orders",component:CustomerOrdersComponent }
]
@NgModule({
    declarations: [ CustomerAddComponent,CustomerListComponent,CustomerOrdersComponent,CustomerComponent],
    imports: [ RouterModule.forChild(routes) ,CommonModule,MatCardModule,SharedModule],
    exports: [ RouterModule ],
})
export class CustomerModule{

}