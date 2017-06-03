import {Http} from '@angular/http'
import {Injectable} from '@angular/core'

@Injectable()
export class PostService{

  constructor(private _http: Http){
  }

  getPost(){
    return this._http.get("https://jsonplaceholder.typicode.com/posts")
    .map(data => data.json());
  }
}
