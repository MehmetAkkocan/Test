/**
 *  Redux saga class init
 */
import { takeEvery, all, fork } from 'redux-saga/effects';
import * as types from '../actions/types';
import apiSaga from './apiSaga';
import loginSaga from './loginSaga';


// export default function* watch() {
//   yield all([takeEvery(types.LOGIN_REQUEST, loginSaga)]);
// }

export default function* watch() {
  yield all([takeEvery(types.LOGIN_REQUEST, loginSaga),
    takeEvery(types.GET_CARGOS, apiSaga),
    takeEvery(types.CREATE_CARGOS, apiSaga),
    takeEvery(types.GET_LOOKUPS_BY_PARENT, apiSaga)]);
 

}


//   function* watchlogin() {
//     console.log("function* watchlogin() Start");
//     let action= yield all([takeEvery(types.LOGIN_REQUEST, loginSaga)]);

  
//   console.log("function* watch()",action);
//   return action;

// }


//   function* watchapi() {
//     console.log("function* watchapi() Start");
//   let action1= yield all([takeEvery(types.GET_CARGOS, apiSaga)]);

//   console.log("function* watchapi()",action1);
//   return action1;
//   }
  
//   function* watch() { return  [fork(watchlogin),fork(watchapi)]};

// export default  watch;