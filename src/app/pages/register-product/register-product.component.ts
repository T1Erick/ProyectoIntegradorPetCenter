import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryModel } from 'src/app/entities/category.model';
import { CreateProductsModelDto, ProductsModel, UpdateProductsModelDto } from 'src/app/entities/products.model';
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
    this.updatingVerification()

  }

  categories: CategoryModel[]=[]
  updating: boolean = false;
  productUpdate: UpdateProductsModelDto={
    id: '',
    titulo:'',
    descripcion:'',
    precio:0,
    foto: '',
    fechaVencimiento:''

  }

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
  updatingVerification(){
    if (history.state.id) {

      this.prepareEventUpdate()
      this.updating = true

    } else {
      this.updating = false;
    }
  }
  prepareEventUpdate(){

    this.productUpdate.id= history.state.id
    this.productUpdate.titulo= history.state.titulo
    this.productUpdate.precio = history.state.precio
    this.productUpdate.descripcion= history.state.descripcion
    this.productUpdate.foto = history.state.foto
    this.productUpdate.fechaVencimiento =history.state.fechaVencimiento
    this.productUpdate.category= history.state.category.id


  }
  updateProduct(){
    this.registerProductService.update(this.productUpdate.id,this.productUpdate).subscribe(
      response =>{console.log(response)}

    )

  }

  getos(){
    console.log(this.products.category)
  }
  navigateToListado() {
    this.router.navigateByUrl("/dashboard/list-product");
  }

}
