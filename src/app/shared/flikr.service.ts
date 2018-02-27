import { Injectable } from '@angular/core';

import { Http, Headers, Response, ResponseOptionsArgs, ResponseOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FlikrService {

  constructor(private _http: Http) { }

  getPicturesAll(perPage: number) {
    // tslint:disable-next-line:max-line-length
    return this._http.get('https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=331b33770ae90a04237a2f3f73e9000f&per_page=' + perPage + '&format=json&nojsoncallback=1').
      map(res => res.json());
  }

  search(tag: string, perPage: number) {
    // tslint:disable-next-line:max-line-length
    return this._http.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=331b33770ae90a04237a2f3f73e9000f&tags=' + tag + '&per_page=' + perPage + '&format=json&nojsoncallback=1&').
      map((res) => res.json());

  }
}
