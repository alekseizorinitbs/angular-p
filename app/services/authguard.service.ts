import {Injectable} from '@angular/core'
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'
import {CacheService} from 'ng2-cache/ng2-cache'
import {Observable, Subject} from 'rxjs/Rx'
import {Http, RequestOptions, Headers} from '@angular/http'

@Injectable()
export class AuthenticatedGuard implements CanActivate {

  private _url = "https://localhost:8443/prweb/api/v1/authenticate";

  isAuthenticated = new Subject<boolean>();
  authenticates$ = this.isAuthenticated.asObservable();

    constructor(private cacheService: CacheService, private router: Router, private _http: Http) {}

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {


        if (!this.cacheService.get('isAuthenticated')) {
            this.router.navigate(["/login"]);
            return false;
        } else {
            return true;
        }
    }

    onAuthenticated(cred):boolean{

        let headers = new Headers({ 'Content-Type': 'application/json' , 'Authorization':cred});
        let options = new RequestOptions({ headers: headers });
        this._http.get(this._url ,options).subscribe((data) => {
          this.cacheService.set('creds', cred);
          this.cacheService.set('isAuthenticated', true);
          this.isAuthenticated.next(true);
          this.router.navigate(['home']);
          return true;
        },
        (err) => {return false});

        return false;
/*
*/
    }

    onLogout(){
      this.cacheService.set('isAuthenticated', false);
      this.cacheService.set('creds', "");
      this.isAuthenticated.next(false);
      this.router.navigate(['/login']);
    }
}
