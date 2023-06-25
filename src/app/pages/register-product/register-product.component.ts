import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryModel } from 'src/app/entities/category.model';
import { CreateProductsModelDto } from 'src/app/entities/products.model';
import { CategorService } from 'src/app/services/category.service.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent implements OnInit {
  constructor(private router: Router, private registerProductService: ProductsService, private categoryService : CategorService){}

  ngOnInit():void{
    this.getCategory()

  }

  categories: CategoryModel[]=[]

  products : CreateProductsModelDto={
    category: '',
    titulo: '',
    descripcion: '',
    precio: 0,
    foto: '',
    fechaVencimiento:''
  };

  getCategory(){

    this.categoryService.getAll().subscribe(
      response => {
        this.categories = response

      }
    )
  }

  createProducts(){
    console.log(this.products);
    try{
      this.registerProductService.build(this.products).subscribe(
        response =>{
          console.log(response);
          }
      )
    }
    catch(error){
      console.log(error)

    }
  }

  getos(){
    console.log(this.products.category)
  }

}
