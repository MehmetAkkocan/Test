export interface IApiRequestState {
  type: String;
  success: string;
  error: string;
}

interface IResponse {
  data: [];
}

export interface IApiResponseState {
  type: String;
  response: IResponse;
}
