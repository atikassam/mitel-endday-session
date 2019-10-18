import {NgModule} from "@angular/core";
import {Route, Router, RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {CommonModule} from "@angular/common";
import {LoginComponent} from "./pages/auth/login/component";
import {FormsModule} from "@angular/forms";
import {AuthApiServices} from "./services/auth.api.services";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {metaReducers, reducers} from "./reducers";
import {AuthEffects} from "./reducers/auth/effects";
import {DemoMaterialModule} from "../../shared/material-modules.module";

const routes: Route[] = [
  // { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent }
]

@NgModule({
  declarations: [ LoginComponent ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    CommonModule,
    FormsModule,
    DemoMaterialModule,
    StoreModule.forFeature('application', reducers as any),
    EffectsModule.forFeature([ AuthEffects ])
  ],
  providers: [ AuthApiServices ],
  exports: [ RouterModule ]
})
export class ApplicationModule {}
