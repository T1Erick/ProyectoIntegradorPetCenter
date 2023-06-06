import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { ForumPetComponent } from './forum-pet/forum-pet.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule } from '@angular/router';
import { SocialNetworkComponent } from './social-network/social-network.component';





@NgModule({
  declarations: [ForumPetComponent,DashboardClientComponent, ProductsComponent, SocialNetworkComponent],
  imports: [CommonModule,RouterModule],
  exports: [ForumPetComponent,DashboardClientComponent, ProductsComponent],
})
export class PagesModule {}
