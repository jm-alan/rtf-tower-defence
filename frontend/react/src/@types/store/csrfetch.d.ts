declare interface FetchObject {
  readonly baseURL: string;
  options: CsrfFetchConfig;

  get (url: string, params: ParamsInit): Promise<any>;
  post (url: string, params: JSONBodyInit): Promise<any>;
  put (url: string, params: JSONBodyInit): Promise<any>;
  patch (url: string, params: JSONBodyInit): Promise<any>;
  delete (url: string, params: JSONBodyInit): Promise<any>;
}

declare interface OptionsFetchable {
  [key: string | number]: any;
  assimilate (fetchObject: CsrfFetch): void;
}

declare type ExhaustiveFetchMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

declare type CsrfFetchConfig = {
  url: string;
  init: RequestInit;
};

declare type ParamsInit = {
  [key: string | number]: AnyInterpolable;
};

declare type JSONBodyInit = {
  [key: string | number]: AnySerializable | JSONBodyInit;
};
