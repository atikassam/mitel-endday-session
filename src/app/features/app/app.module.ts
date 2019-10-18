import {NgModule} from "@angular/core";
import {LoginComponent} from "./pages/login/component";
import {Route, Router, RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {CommonModule} from "@angular/common";

const routes: Route[] = [
  // { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent }
]

@NgModule({
  declarations: [ LoginComponent ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    CommonModule
  ],
  exports: [ RouterModule ]
})
export class ApplicationModule {}
