export interface ILoginRequestState {
  type: String;
  username: string;
  password: string;
}

interface IResponse {
  id_token: string;
}

export interface ILoginResponseState {
  type: String;
  response: IResponse;
}
