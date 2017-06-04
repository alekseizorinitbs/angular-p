import {Http, RequestOptions, Headers} from '@angular/http'
import {Injectable} from '@angular/core'
import {GPNRequest} from '../model/gpn_request.model'
import {Assignment} from '../model/assignments.model'
import {Observable, Subject} from 'rxjs/Rx'
import {AuthenticatedGuard} from './authguard.service'
import {CacheService} from 'ng2-cache/ng2-cache'

@Injectable()
export class AssignmentService{

private _url = "https://localhost:8443/prweb/api/v1/";

headers = new Headers({ 'Content-Type': 'application/json', 'Authorization':this._cacheService.get('creds')});
options = new RequestOptions({ headers: this.headers });

constructor(private _http: Http, private _authGuard: AuthenticatedGuard, private _cacheService: CacheService){
  this._authGuard.authenticates$.subscribe(result => {
    this.headers = new Headers({ 'Content-Type': 'application/json', 'Authorization':this._cacheService.get('creds')});
    this.options = new RequestOptions({ headers: this.headers });
  });
}

  private isAssignmentCached = false;
  private _assignment: Assignment;

  cacheAssignment(_assignment: Assignment){
    this._assignment = _assignment;
    this.isAssignmentCached = true;
  }

  getCachedAssignment() : Assignment{
    return this._assignment;
  }

  getAssignments(){

    return this._http.get(this._url + 'assignments/', this.options)
    .map(data => data.json());
  }

  getAssignment(id) {

    return this._http.get(this._url + 'assignments/' + id, this.options)
    .map(data => data.json());
  }

  performAssignment(_assignment: any, id, actionID) {
          console.log(id)

    return this._http.post(this._url + 'assignments/' + id + '/?actionID=' + actionID, JSON.stringify(_assignment), this.options)
    .map(data => data.json());
  }
}
