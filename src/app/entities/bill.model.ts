import { DetailBillModel } from "./detailbill.model";

export interface BillModel{
    id:string;
    date: Date;
    total: number;
    waytopay: string;
    detailbills:DetailBillModel;
  }
  
  export interface CreateBillModelDto extends Omit<BillModel,'id'>{
  
  }
  
  export interface UpdateBillDto extends Partial<BillModel>{
    id: string;
  }