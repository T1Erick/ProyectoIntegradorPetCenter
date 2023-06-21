import { PublicationModel } from "./publication.model";
import { UsersModel } from "./user.model";

export interface DetailPublicationsModel {
  id: string;
  fecha_publicacion: string;
  userId: string;
  publicationId: string;
}

export interface CreateDetailPublicationsModelDto extends Omit<DetailPublicationsModel, 'id'> {
  userId: string;
  publicationId: string;
}

export interface UpdateDetailPublicationsModelDto extends Partial<DetailPublicationsModel> {
  id: string;
}
