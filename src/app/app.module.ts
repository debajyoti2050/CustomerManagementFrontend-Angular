import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { DisplayByEmailComponent } from './display-by-email/display-by-email.component';
import { DisplayByIdComponent } from './display-by-id/display-by-id.component';
import { GetEmailComponent } from './get-email/get-email.component';
import { GetIdDeleteComponent } from './get-id-delete/get-id-delete.component';
import { GetIdFindComponent } from './get-id-find/get-id-find.component';
import { GetIdUpdateComponent } from './get-id-update/get-id-update.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    HomePageComponent,
    CreateCustomerComponent,
    DisplayByEmailComponent,
    DisplayByIdComponent,
    GetEmailComponent,
    GetIdDeleteComponent,
    GetIdFindComponent,
    GetIdUpdateComponent,
    UpdateCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
