/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { call, put, select } from 'redux-saga/effects';
// import { delay } from 'redux-saga';

import { Alert } from 'react-native';
 import {getCargos,postCargos,getLookupByParent} from 'app/services/apiCargos';
import * as apiActions from 'app/store/actions/apiAction';
import * as loginActions from 'app/store/actions/loginActions';
import { LoginState } from 'app/screens/Login/loginx';

import * as types from '../actions/types';
import { ICargo } from 'app/models/models/cargo.model';


// Our worker Saga that logins the user
export default function* apiAsync(action: {type:string,params:any, success: any, error: any  }) {
  
  console.log("apiAsync start ",action.type); 
   
  const id_token = yield select(
    (state: LoginState) => state.loginReducer.id_token,
  );
  
  console.log("apiAsync start ",id_token); 
  
  // yield put(apiActions.getCargoList(action.success,action.error));
  
  //let action =yield put(loginActions.requestLogin())
  //how to call api

  let response={}
  switch (action.type) {
    case types.GET_CARGOS:{
      
      response = yield call(getCargos,id_token);
      break;
    }

    case types.CREATE_CARGOS :{
      response = yield call(postCargos,id_token,action.params);
  
          
      break;
    }

      case types.GET_LOOKUPS_BY_PARENT :{
      response = yield call(getLookupByParent,id_token,action.params);
  
          
      break;
    }  
    default:{

      break;
    }
      
  }



  console.log("response",response);
  
  //mock response
  //const response = { success: true, data: { id: 1 }, message: 'Success' };


  switch (response.status) {
    case 200:{
      
      console.log("response start ");
      action.success(response);
      // yield put(loginActions.onLoginResponse(response.data));
  
      // no need to call navigate as this is handled by redux store with SwitchNavigator
      //yield call(navigationActions.navigateToHome);
        break;
    }

    case 401:{
      action.error(response);
      yield put(loginActions.loginFailed());
  
  //dispatch(loginActions.logOut());
  
  setTimeout(() => {
        
        //Alert.alert('', "Giriş Yapılamadı");
      }, 200);
          
      break;
    }
    default:{

      break;
    }
      
  }


}
