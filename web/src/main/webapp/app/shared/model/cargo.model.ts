import { Moment } from 'moment';
import { ILookup } from 'app/shared/model/lookup.model';

export interface ICargo {
  id?: number;
  uid?: string;
  user?: string;
  sourceaddress?: string;
  cargodescription?: number;
  destinationaddress?: string;
  updateDate?: string;
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
