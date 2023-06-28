import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryModel } from 'src/app/entities/category.model';
import {  ProductsModel } from 'src/app/entities/products.model';
import { SectionModel } from 'src/app/entities/section.model';
import { CategorService } from 'src/app/services/category.service.service';
import { ProductsService } from 'src/app/services/products.service';
import { SectionService } from 'src/app/services/section.service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit  {
  constructor(private productService: ProductsService, private router: Router, private sectionService:SectionService, private registerCategory: CategorService,){}
  ngOnInit():void{
    this.getProducts();
    this.getSeccion();
    this.getCategories();

  }
  searchTerm: string = '';
  seccion: SectionModel[]=[]
  productosSeleccionados: ProductsModel[] = [];
  products: ProductsModel[]=[];
  category: CategoryModel[]=[]

  getProducts(){
    this.productService.getAll().subscribe(

      response =>{
        console.log(this.products)
        this.products = response;

      }
    )
  }
  getSeccion(){
    this.sectionService.getAll().subscribe(
      response =>{
        console.log(this.seccion);
        this.seccion =response

      }
    )
  }
  getCategories(){
    this.registerCategory.getAll().subscribe(

      response =>{
        this.category = response;
        console.log(this.category)

      }
    )

  }
  agregarProduct(product: ProductsModel){
    this.productosSeleccionados.push(product);
    console.log('Producto agregado:', product);
    console.log('Listado', this.productosSeleccionados)

  }
  NavigateToBill(){
    this.router.navigateByUrl("dashboard/bill");
  }





}
