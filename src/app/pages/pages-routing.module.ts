import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { ProductsComponent } from './products/products.component';
import { SocialNetworkComponent } from './social-network/social-network.component';
import { RegisterProductComponent } from './register-product/register-product.component';
import { RegisterCategoryComponent } from './register-category/register-category.component';
import { RegisterSectionComponent } from './register-section/register-section.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { ListProductComponent } from './list-product/list-product.component';
import { BillComponent } from './bill/bill.component';
import { AdminGuard } from '../guard/admin.guard';
import { UserGuard } from '../guard/user.guard';


const routes: Routes = [
  {
    path: 'dashboard', component: PagesComponent,
    children: [
      {path: 'dashboard-client', component: DashboardClientComponent, canActivate:[UserGuard]},
      {path:'forum', component: SocialNetworkComponent , canActivate:[UserGuard]},
      {path:'products', component:ProductsComponent, canActivate:[UserGuard]},
      {path:'register-products', component: RegisterProductComponent,canActivate: [AdminGuard]},
      {path:'register-category', component: RegisterCategoryComponent ,canActivate: [AdminGuard]},
      {path: 'register-seccion', component: RegisterSectionComponent,canActivate: [AdminGuard]},
      {path:'dashboard-admin', component:DashboardAdminComponent,canActivate: [AdminGuard]},
      {path:'list-product', component:ListProductComponent,canActivate: [AdminGuard]},
      {path:'bill', component: BillComponent, canActivate:[UserGuard]}

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
