import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { ForumPetComponent } from './forum-pet/forum-pet.component';
import { ProductsComponent } from './products/products.component';
import { SocialNetworkComponent } from './social-network/social-network.component';
import { RegisterProductComponent } from './register-product/register-product.component';
import { RegisterCategoryComponent } from './register-category/register-category.component';
import { RegisterSectionComponent } from './register-section/register-section.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { ListProductComponent } from './list-product/list-product.component';
import { BillComponent } from './bill/bill.component';


const routes: Routes = [
  {
    path: 'dashboard', component: PagesComponent,
    children: [
      {path: 'dashboard-client', component: DashboardClientComponent},
      {path:'forum', component: SocialNetworkComponent},
      {path:'products', component:ProductsComponent},
      {path:'register-products', component: RegisterProductComponent},
      {path:'register-category', component: RegisterCategoryComponent},
      {path: 'register-seccion', component: RegisterSectionComponent},
      {path:'perfil',component:ForumPetComponent},
      {path:'dashboard-admin', component:DashboardAdminComponent},
      {path:'list-product', component:ListProductComponent},
      {path:'bill', component: BillComponent}

    ]
  },

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
})
export class PagesRoutingModule { }
