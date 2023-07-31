/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';

import { IApiState } from 'app/models/reducers/api';
import {
  IApiRequestState,
  IApiResponseState,
} from 'app/models/actions/api';
const initialState: IApiState = {
  data: [],
  success: {},
  error: {},


};

export const apiReducer = createReducer(initialState, {
  [types.GET_CARGOS](state: IApiState, action: IApiRequestState) {
   console.log("GET_CARGOS start state:",state," action :",action);
   
    return {
      ...state,
      success: action.success,
      error: action.error,
    };
  },
  [types.CREATE_CARGOS](state: IApiState, action: IApiRequestState) {
    console.log("GET_CARGOS start state:",state," action :",action);
    
     return {
       ...state,
       success: action.success,
       error: action.error,
     };
   },
  [types.GET_CARGOS_RESPONSE](state: IApiState, action: IApiResponseState) {
    console.log("GET_CARGOS_RESPONSE start",state,action);
    return {
      ...state,
      data: action.response.data,
      
    };
  }
});
