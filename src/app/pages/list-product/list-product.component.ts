import { Component, OnInit } from '@angular/core';
import { ProductsModel, UpdateProductsModelDto } from 'src/app/entities/products.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit{

  constructor(private productsService: ProductsService){}

  ngOnInit(): void {
    this.getProducts()

  }
  updating: boolean = false;
  products: ProductsModel[]=[]
  selectedProducts: UpdateProductsModelDto={
    id: '',
    titulo:'',
    precio: 0,
    descripcion: '',
    foto:'',
    fechaVencimiento:'',
    

  }

  getProducts(){
    this.productsService.getAll().subscribe(
      response =>{
        console.log(response)
        this.products = response
      }
    )
  }
  editProducts(product:ProductsModel){
    this.selectedProducts = product
    this.updating= true
  }

  deleteProduct(id: ProductsModel['id']){

    this.productsService.destroy(id).subscribe(
      response =>{
        this.products = this.products.filter(products => products.id != id);
        console.log(response)
      }
    )

  }
  updateProducts(id:ProductsModel['id'],product: UpdateProductsModelDto){
    this.productsService.update(id,product).subscribe(
      response =>{
        console.log(response)
      }
    )

  }


}
