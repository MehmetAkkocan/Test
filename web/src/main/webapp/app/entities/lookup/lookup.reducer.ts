import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction, IPayload } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { ILookup, defaultValue } from 'app/shared/model/lookup.model';

export declare type ICrudGetParentAction<T> = (
  parent: string,
  page?: number,
  size?: number,
  sort?: string
) => IPayload<T> | ((dispatch: any) => IPayload<T>);

export const ACTION_TYPES = {
  FETCH_LOOKUP_LIST: 'lookup/FETCH_LOOKUP_LIST',
  FETCH_LOOKUP: 'lookup/FETCH_LOOKUP',
  CREATE_LOOKUP: 'lookup/CREATE_LOOKUP',
  UPDATE_LOOKUP: 'lookup/UPDATE_LOOKUP',
  DELETE_LOOKUP: 'lookup/DELETE_LOOKUP',
  RESET: 'lookup/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ILookup>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type LookupState = Readonly<typeof initialState>;

// Reducer

export default (state: LookupState = initialState, action): LookupState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_LOOKUP_LIST):
    case REQUEST(ACTION_TYPES.FETCH_LOOKUP):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_LOOKUP):
    case REQUEST(ACTION_TYPES.UPDATE_LOOKUP):
    case REQUEST(ACTION_TYPES.DELETE_LOOKUP):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_LOOKUP_LIST):
    case FAILURE(ACTION_TYPES.FETCH_LOOKUP):
    case FAILURE(ACTION_TYPES.CREATE_LOOKUP):
    case FAILURE(ACTION_TYPES.UPDATE_LOOKUP):
    case FAILURE(ACTION_TYPES.DELETE_LOOKUP):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_LOOKUP_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_LOOKUP):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_LOOKUP):
    case SUCCESS(ACTION_TYPES.UPDATE_LOOKUP):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_LOOKUP):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: {},
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

const apiUrl = 'api/lookups';

// Actions

export const getEntities: ICrudGetAllAction<ILookup> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_LOOKUP_LIST,
  payload: axios.get<ILookup>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntitiesParent: ICrudGetParentAction<ILookup> = (parent, page, size, sort) => ({
  type: ACTION_TYPES.FETCH_LOOKUP_LIST,
  payload: axios.get<ILookup>(`${apiUrl}/parent/${parent}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<ILookup> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_LOOKUP,
    payload: axios.get<ILookup>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<ILookup> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_LOOKUP,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ILookup> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_LOOKUP,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<ILookup> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_LOOKUP,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
