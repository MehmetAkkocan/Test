

import * as types from './types';

export function getCargoList(success: any, error: any) {
    console.log("getCargoList");
    
  return {
    type: types.GET_CARGOS,
    success,
    error
  };
}


export function getLookupByParent(parent:string,success: any, error: any) {
  console.log("getLookupByParent"),parent;
  
return {
  type: types.GET_LOOKUPS_BY_PARENT,
  params:parent,
  success,
  error
};
}




export function createCargo(data:any,success: any, error: any) {
  console.log("createCargo",data);
  
return {
  type: types.CREATE_CARGOS,
  params:data,
  success,
  error
};
}
