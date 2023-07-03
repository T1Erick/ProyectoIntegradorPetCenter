import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CategoryModel } from 'src/app/entities/category.model';
import jwt_decode from 'jwt-decode';

import { CreateProductsModelDto, ProductsModel } from 'src/app/entities/products.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  fechaActual: Date;
  constructor(private cokkieService: CookieService,private router: Router) {
    this.imprimirButton = null;
    this.fechaActual = new Date();

  }

  Jsonusuario= this.cokkieService.get('user')
  payload: any = jwt_decode(this.Jsonusuario);
  namebill = this.payload.name;
  secondnamebill= this.payload.secondname;
  emailbill = this.payload.email

  ngOnInit() {
    this.imprimirButton = document.querySelector('button') as HTMLButtonElement;
    this.imprimirButton.addEventListener('click', this.imprimirFactura);
    for (let carro = 0; carro < sessionStorage.length; carro++) {
      const carros = sessionStorage.getItem(carro.toString())
      if (carros) {
        const info = JSON.parse(carros)
        this.products.push(info)

      }


    }
    console.log(this.products)




  }
  multipliclar(i: number,precioU:number){
     this.totalU[i] = this.cantidad[i] * precioU
     this.total()

  }
  totalF = 0
  impuesto=0
  totalFactura =0
  total(){
    this.totalF= 0
    let iva = 0.12
    for (let t = 0; t < this.totalU.length; t++) {
      const element = this.totalU[t];
      this.totalF = element+this.totalF

    }
    this.impuesto = iva * this.totalF
    this.impuesto = parseFloat(this.impuesto.toFixed(2))
    this.totalFactura= this.impuesto + this.totalF
    this.totalFactura= parseFloat(this.totalFactura.toFixed(2))

  }





 products:ProductsModel[]=[];

 cantidad:number[]=[];
 totalU : number[]=[];





  imprimirButton: HTMLButtonElement | null;




  imprimirFactura() {
    window.print();

  }
  deletecookie(){
    this.cokkieService.delete('user')
    this.router.navigateByUrl("/login")
  }





}




