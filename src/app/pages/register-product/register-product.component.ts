import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateProductsModelDto } from 'src/app/entities/products.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent implements OnInit {
  constructor(private router: Router, private registerProductService: ProductsService){}

  ngOnInit():void{

  }

  products : CreateProductsModelDto={
    categoryId: '',
    titulo: '',
    description: '',
    precio: 0,
    foto: '',
    fecha_vencimiento:''
  };

  createProducts(){
    console.log(this.products);
    try{
      this.registerProductService.build(this.products).subscribe(
        response =>{
          console.log(response);
          this.router.navigateByUrl("/dashboard/dashboard-client")}
      )
    }
    catch(error){
      console.log(error)

    }
  }

}
