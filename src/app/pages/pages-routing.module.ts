import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { ForumPetComponent } from './forum-pet/forum-pet.component';
import { ProductsComponent } from './products/products.component';
import { SocialNetworkComponent } from './social-network/social-network.component';


const routes: Routes = [
  {
    path: 'dashboard', component: PagesComponent,
    children: [
      {path: 'dashboard-client', component: DashboardClientComponent},
      {path:'forum', component: SocialNetworkComponent},
      {path:'products', component:ProductsComponent}
    ]
  }
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
