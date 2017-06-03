import {Http, RequestOptions, Headers} from '@angular/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs/Rx'
import {GPNRequest} from '../model/gpn_request.model'
import {Assignment} from '../model/assignments.model'

@Injectable()
export class AssignmentService{

private _url = "https://localhost:8443/prweb/api/v1/";

  constructor(private _http: Http){
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

    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization':'Basic QWRtaW5AQW5ndWxhclA6MTIz' });
    let options = new RequestOptions({ headers: headers });

    return this._http.get(this._url + 'assignments/', options)
    .map(data => data.json());
  }

  getAssignment(id) {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization':'Basic QWRtaW5AQW5ndWxhclA6MTIz' });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this._url + 'assignments/' + id, options)
    .map(data => data.json());
  }

  performAssignment(_assignment: any, id, actionID) {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization':'Basic QWRtaW5AQW5ndWxhclA6MTIz' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this._url + 'assignments/' + id + '/?actionID=' + actionID, JSON.stringify(_assignment),options)
    .map(data => data.json());
  }
}
