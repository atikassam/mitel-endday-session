import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatButtonModule, MatCardModule, MatToolbarModule} from "@angular/material";
import {ContainerComponent} from "./components/container/component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [ ContainerComponent ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [ ],
  bootstrap: [ ],
  exports: [ ContainerComponent ]
})
export class SharedModule { }
