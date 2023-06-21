export interface PublicationModel {
  id: string;
  title: string;
  description: string;
  images: string[];
}
export interface CreatePublicationModelDto extends Omit<PublicationModel,'id' >{

}

export interface UpdatePublicationDto extends Partial<PublicationModel>{
  id:string;
}
