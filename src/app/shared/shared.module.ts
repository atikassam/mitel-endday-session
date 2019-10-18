import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatButtonModule, MatCardModule, MatToolbarModule} from "@angular/material";
import {ContainerComponent} from "./components/container/component";

@NgModule({
  declarations: [ ContainerComponent ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [],
  exports: []
})
export class SharedModule { }
