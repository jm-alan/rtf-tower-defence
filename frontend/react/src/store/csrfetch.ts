import store from '../store';
import { AddError, HideErrors, ShowErrors } from './errors';

export default class CsrfFetch implements FetchObject {
  private readonly dispatch = store.dispatch;
  readonly baseURL: string;
  options: CsrfFetchConfig;

  constructor (baseURL: string) {
    this.baseURL = baseURL;
    this.options = {
      url: '',
      init: {
        body: null
      }
    };
  }

  private async __fetch (method: ExhaustiveFetchMethod): Promise<any> {
    try {
      const data = await fetch(
        this.options.url,
        {
          ...this.options.init,
          method
        }
      );

      const parsed = await data.json();
      this.dispatch(HideErrors());

      return parsed;
    } catch (err: any) {
      if (process.env.NODE_ENV === 'production') {
        this.dispatch(AddError('Sorry, something went wrong. Please refresh the page and try again'));
        this.dispatch(ShowErrors());
      } else {
        this.dispatch(AddError(`Error ${err} occurred during ${method} ${this.options.url}`));
        this.dispatch(ShowErrors());
      }
    }
  }

  private __preflight (url: string, params: OptionsFetchable) {
    this.options.url = url;
    params.assimilate(this);
  }

  async get (url: string, params: ParamsInit): Promise<any> {
    this.__preflight(url, new QueryParams(params));
    return await this.__fetch('GET');
  }

  async post (url: string, body: JSONBodyInit): Promise<any> {
    this.__preflight(url, new JSONBody(body));
    return await this.__fetch('POST');
  }

  async put (url: string, body: JSONBodyInit): Promise<any> {
    this.__preflight(url, new JSONBody(body));
    return await this.__fetch('PUT');
  }

  async patch (url: string, body: JSONBodyInit): Promise<any> {
    this.__preflight(url, new JSONBody(body));
    return await this.__fetch('PATCH');
  }

  async delete (url: string, body: JSONBodyInit): Promise<any> {
    this.__preflight(url, new JSONBody(body));
    return await this.__fetch('DELETE');
  }
}

class QueryParams implements OptionsFetchable {
  private readonly formatted: string;

  constructor (init: ParamsInit) {
    this.formatted = '?';
    for (const key in init) this.formatted += `&${key}=${init[key]}`;
  }

  assimilate (fetchObject: CsrfFetch): void {
    fetchObject.options.url = fetchObject.baseURL + this.formatted;
  }
}

class JSONBody implements OptionsFetchable {
  private readonly stringified: string;

  constructor (init: JSONBodyInit) {
    this.stringified = JSON.stringify(init);
  }

  assimilate (fetchObject: CsrfFetch): void {
    fetchObject.options.init = {
      ...fetchObject.options.init,
      body: this.stringified,
      headers: {
        'Content-Type': 'application/json'
      }
    };
  }
}
