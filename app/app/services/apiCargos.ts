import { ICargo } from 'app/models/models/cargo.model';
import  apiClient  from 'app/services/client';


export  function getCargos(token:string) {
  return apiClient(true,token)
          .get("cargos");

}


export  function postCargos(token:string,data:ICargo) {
  return apiClient(true,token)
          .post("cargos",data);

}



export  function getLookupByParent(token:string,parent:string) {
  return apiClient(true,token)
          .get("lookups/parent/"+parent);

}
