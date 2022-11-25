import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { Route, RouterModule, Routes } from '@angular/router';

const myRoute:Routes=[
  {
    path:"",
    component:AddProductComponent
  },
  {
    path:"viewproduct",
    component:ViewProductComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ViewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
