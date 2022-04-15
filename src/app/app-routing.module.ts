import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";

const routes: Routes = [
  // {path: 'customers', component: CustomerListComponent},
  // {path: 'createCustomer', component: CreateCustomerComponent },
  // {path: 'updateCustomer/:id', component: UpdateCustomerComponent},
  {path: 'homepage', component: HomePageComponent},
  // {path: 'getIdUpdate', component: GetIdUpdateComponent},
  // {path: 'getIdDelete', component: GetIdDeleteComponent},
  // {path: 'getEmail', component: GetEmailComponent},
  // {path: 'getID', component: GetIdFindComponent},
  // {path: 'displayByID/:id', component: DisplayByIdComponent},
  // {path: 'displayByID/:email', component: DisplayByEmailComponent},
  {path: '', redirectTo: 'homepage', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
