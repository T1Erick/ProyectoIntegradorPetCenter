import { BillModel } from "./bill.model";
import { ProductsModel } from "./products.model";


export interface DetailBillModel{
  id:string;
  amount: string;
  bill:BillModel;
  products:ProductsModel;
}

export interface CreateDetailBillModelDto extends Omit<DetailBillModel,'id' | 'bill' | 'id' | 'products' >{
  billId:number
  productId: number
}

export interface UpdateDetailBillModelDto extends Partial<DetailBillModel>{
  id:string;
  billId?:number
  productId?: number
}
