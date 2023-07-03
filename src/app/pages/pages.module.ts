import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule } from '@angular/router';
import { SocialNetworkComponent } from './social-network/social-network.component';
import { RegisterProductComponent } from './register-product/register-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterSectionComponent } from './register-section/register-section.component';
import { RegisterCategoryComponent } from './register-category/register-category.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ListProductComponent } from './list-product/list-product.component';
import { BillComponent } from './bill/bill.component';
import { ProductnamePipe } from '../pipe/productname.pipe';
import { SharedModule } from "../shared/shared.module";
import { CategryprductPipe } from '../pipe/categryprduct.pipe';






@NgModule({
    declarations: [ DashboardClientComponent, ProductsComponent, SocialNetworkComponent, RegisterProductComponent, RegisterSectionComponent, RegisterCategoryComponent, DashboardAdminComponent, ListProductComponent, BillComponent, ProductnamePipe,CategryprductPipe],
    exports: [DashboardClientComponent, ProductsComponent, RegisterProductComponent],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        ReactiveFormsModule,
        NgSelectModule,
        SharedModule
    ]
})
export class PagesModule {}
