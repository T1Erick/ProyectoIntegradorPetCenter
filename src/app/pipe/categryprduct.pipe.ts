import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categryprduct'
})
export class CategryprductPipe implements PipeTransform {

  transform(products: any[], categoryproduct: string): any[] {
    if (!products || !categoryproduct) {
      return products;
    }

    return products.filter(product => product.category.namecategory === categoryproduct);
  }

}
