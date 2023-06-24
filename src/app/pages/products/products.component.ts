import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateProductsModelDto, ProductsModel } from 'src/app/entities/products.model';
import { CategorService } from 'src/app/services/category.service.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit  {
  constructor(private productService: ProductsService){}
  ngOnInit():void{
    this.getProducts()

  }
  products: ProductsModel[]=[]
  getProducts(){
    this.productService.getAll().subscribe(

      response =>{
        console.log(this.products)
        this.products = response;

      }
    )
  }




}
