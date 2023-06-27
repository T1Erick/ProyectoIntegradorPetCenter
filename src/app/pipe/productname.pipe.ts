import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productName'
})
export class ProductnamePipe implements PipeTransform {

  transform(productos: any[], term: string): any[] {
    if (!productos || !term) {
      return productos;
    }

    return productos.filter(producto =>
      producto.titulo.toLowerCase().includes(term.toLowerCase())
    );
  }

}
