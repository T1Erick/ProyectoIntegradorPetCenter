import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/entities/category.model';

import { CreateProductsModelDto, ProductsModel } from 'src/app/entities/products.model';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  constructor() {
    this.imprimirButton = null;
  }

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

  }





 products:ProductsModel[]=[];

 cantidad:number[]=[];
 totalU : number[]=[];





  imprimirButton: HTMLButtonElement | null;




  imprimirFactura() {
    window.print();
  }





}


