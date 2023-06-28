import { Component, OnInit } from '@angular/core';
import  jsPDF from 'jspdf';
import { ProductsModel } from 'src/app/entities/products.model';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  ngOnInit() {
    this.imprimirButton = document.querySelector('button') as HTMLButtonElement;
    this.imprimirButton.addEventListener('click', this.imprimirFactura);
    this.products = history.state
  }



  products:ProductsModel[]=[]



  imprimirButton: HTMLButtonElement | null;

  constructor() {
    this.imprimirButton = null;
  }



  imprimirFactura() {
    window.print();
  }



}


