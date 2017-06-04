import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {Router} from '@angular/router'
import {CaseService} from '../../services/case.service'
import {PortalComponent} from '../../portal/portal.component'
import {AssignmentService} from '../../services/assignment.service'
import {GPNRequest, GPNRequestContent} from '../../model/gpn_request.model'
import {Observable, Subject} from 'rxjs/Rx'
import {CacheService} from 'ng2-cache/ng2-cache'
import {AuthenticatedGuard} from '../../services/authguard.service'

@Component({
    selector: 'gp-header',
    templateUrl: 'app/components/header/header.html',
    styleUrls: ['app/portal/style.css']
})

export class HeaderComponent implements OnInit{

  isAuthenticated;

  ngOnInit(){
    this.isAuthenticated = this.cacheService.get('isAuthenticated');
  }

    constructor(private _caseService: CaseService, private _assignmentService: AssignmentService, private cacheService: CacheService,
    private _router: Router, private _authGuard: AuthenticatedGuard) {
        this._authGuard.authenticates$.subscribe(result => {
          this.isAuthenticated = result;
          console.log(result);
        });
    }

    onCreateCase1() {
        let _case: GPNRequest = new GPNRequest();

        _case.caseTypeID = "PersonalEdition-AngularP-Work-GPNRequest";
        _case.processID = "pyStartCase";
        _case.content = new GPNRequestContent();

        this._caseService.createCase(_case).subscribe(status => (status));
    }

    onLogout(){
      this._authGuard.onLogout();
    }
}
