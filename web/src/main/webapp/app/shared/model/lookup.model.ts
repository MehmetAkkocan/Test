export interface ILookup {
  id?: number;
  name?: string;
  lang?: string;
  uid?: string;
  value?: string;
  description?: string;
  parent?: ILookup;
}

export const defaultValue: Readonly<ILookup> = {};
