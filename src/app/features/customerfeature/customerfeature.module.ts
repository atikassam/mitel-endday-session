import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAddComponent } from './pages/customer-add/component';
import { CustomerListComponent } from './pages/customer-list/component';
import { CustomerOrdersComponent } from './pages/customer-orders/component';

const routes:Routes=[
    { path:"add",component:CustomerAddComponent },
    { path:"list",component:CustomerListComponent },
    { path:"orders",component:CustomerOrdersComponent }
]
@NgModule({
    declarations: [ CustomerAddComponent,CustomerListComponent,CustomerOrdersComponent],
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})
export class CustomerModule{

}