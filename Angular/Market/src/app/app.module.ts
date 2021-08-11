import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllComponent } from './view/categories/all/all.component';
import { SnacksComponent } from './view/categories/snacks/snacks.component';
import { DrinksComponent } from './view/categories/drinks/drinks.component';
import { CleaningComponent } from './view/categories/cleaning/cleaning.component';
import { NavComponent } from './view/nav/nav.component';
import { ProductsComponent } from './view/products/products.component';
import { ProductDetailsComponent } from './view/product-details/product-details.component';
import { UsersComponent } from './view/users/users.component';
import { UserDetailsComponent } from './view/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    SnacksComponent,
    DrinksComponent,
    NavComponent,
    ProductsComponent,
    ProductDetailsComponent,
    CleaningComponent,
    UsersComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
