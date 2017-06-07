import {Http, RequestOptions, Headers} from '@angular/http'
import {Injectable} from '@angular/core'
import {GPNRequest} from '../model/gpn_request.model'
import {GPNBase} from '../model/gpn_base.model'
import {Observable, Subject} from 'rxjs/Rx'
import {AuthenticatedGuard} from './authguard.service'
import {CacheService} from 'ng2-cache/ng2-cache'

@Injectable()
export class DictService{

private _urlExtra = "https://localhost:8443/prweb/PRRestService/GPNDataManager/GPNDataManager/";

  parentCase = new Subject<GPNRequest>();
  headers = new Headers({ 'Content-Type': 'application/json', 'Authorization':this._cacheService.get('creds')});
  options = new RequestOptions({ headers: this.headers });

  /*Cached dictionaries*/


  constructor(private _http: Http, private _authGuard: AuthenticatedGuard, private _cacheService: CacheService){

    this._authGuard.authenticates$.subscribe(result => {
      this.headers = new Headers({ 'Content-Type': 'application/json', 'Authorization':this._cacheService.get('creds')});
      this.options = new RequestOptions({ headers: this.headers });

      // cache dicts
      console.log('Authenticated');

  });
}


  getCities(){
    return this._http.get(this._urlExtra + 'Dict_Cities/', this.options).map(data => data.json());
  }


}
