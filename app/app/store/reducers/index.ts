/*
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as loginReducer from './loginReducer';
import * as themeReducer from './themeReducer';
import * as apiReducer from './apiReducer';
export default Object.assign(  apiReducer, loginReducer, loadingReducer, themeReducer);
