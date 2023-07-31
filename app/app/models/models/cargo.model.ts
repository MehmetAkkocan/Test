import { ILookup } from './lookup.model';

export interface ICargo {
  id?: number;
  uid?: string;
  user?: string;
  sourceaddress?: string;
  cargodescription?: number;
  destinationaddress?: string;
  createDate?: string;
  sourcecity?: ILookup;
  sourcedistinct?: ILookup;
  vehicletype?: ILookup;
  vehiclecasetype?: ILookup;
  cargotype?: ILookup;
  destinationcity?: ILookup;
  destinationdistinct?: ILookup;
}

export const defaultValue: Readonly<ICargo> = {};
