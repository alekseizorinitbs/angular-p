import {Http, RequestOptions, Headers} from '@angular/http'
import {Injectable} from '@angular/core'
import {GPNRequest} from '../model/gpn_request.model'
import {Observable, Subject} from 'rxjs/Rx'

@Injectable()
export class CaseService{

private _url = "https://localhost:8443/prweb/api/v1/";
private _urlExtra = "https://localhost:8443/prweb/PRRestService/GPNDataManager/GPNDataManager/";

  parentCase = new Subject<GPNRequest>();
  headers = new Headers({ 'Content-Type': 'application/json', 'Authorization':'Basic QWRtaW5AQW5ndWxhclA6MTIz' });
  options = new RequestOptions({ headers: this.headers });

  parentCase$ = this.parentCase.asObservable();

  constructor(private _http: Http){
  }

  cacheCaseData(case_: GPNRequest){
    this.cachedCaseData = case_;
  }

  private cachedCaseData: GPNRequest = null;

  getCachedCaseData(): GPNRequest{
    return this.cachedCaseData;
  }

  getUnresolvedClients(){
    return this._http.get(this._urlExtra + 'Clients/', this.options)
    .map(data => data.json());
  }

  getCases(){

    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization':'Basic QWRtaW5AQW5ndWxhclA6MTIz' });
    let options = new RequestOptions({ headers: headers });

    return this._http.get(this._url + 'cases/', options)
    .map(data => data.json());
  }

  getCase(id){
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization':'Basic QWRtaW5AQW5ndWxhclA6MTIz' });
    let options = new RequestOptions({ headers: headers });
    console.log("rest called");
    return this._http.get(this._url + 'cases/' + id, options)
    .map(data => data.json());
  }

  getAttachedDocuments(caseId){
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization':'Basic QWRtaW5AQW5ndWxhclA6MTIz' });
    let options = new RequestOptions({ headers: headers });
    return this._http.get('https://localhost:8443/prweb/PRRestService/GPNDataManager/GPNDataManager/DocumentManager/' + caseId, options)
    .map(data => data.json());
  }

  createCase(_case: GPNRequest) : Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization':'Basic QWRtaW5AQW5ndWxhclA6MTIz' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post(this._url + 'cases/', JSON.stringify(_case),options)
    .map(data => data.json());
  }

  getDocument(docid){
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization':'Basic QWRtaW5AQW5ndWxhclA6MTIz', 'docid':docid ,
    'responseContentType':'application/octet-stream' , 'content-disposition':'Content-Disposition: inline; filename="????????.docx"'});
    let options = new RequestOptions({ headers: headers });

    return this._http.get('https://localhost:8443/prweb/PRHTTPService/GPNDataManager/GPNDataManager/DownloadDoc',options);
  }

  setNewParentCase(newParentCase: GPNRequest){
    this.parentCase.next(newParentCase);
  }
}
