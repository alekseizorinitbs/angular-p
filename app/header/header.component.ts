import {Component, Input, Output, EventEmitter} from '@angular/core';
import {CaseService} from '../services/case.service'
import {PortalComponent} from '../portal/portal.component'
import {AssignmentService} from '../assignmentService/assignment.service'
import {GPNRequest, Case1Content} from '../model/gpn_request.model'
import {Observable} from 'rxjs/Rx'

@Component({
    selector: 'gp-header',
    templateUrl: 'app/header/header.html',
    styleUrls: ['app/portal/style.css']
})

export class HeaderComponent {

    constructor(private _caseService: CaseService, private _assignmentService: AssignmentService) {

    }

    onCreateCase1() {
        let _case: GPNRequest = new GPNRequest();

        _case.caseTypeID = "PersonalEdition-AngularP-Work-GPNRequest";
        _case.processID = "pyStartCase";
        _case.content = new Case1Content();

        this._caseService.createCase(_case).subscribe(status => (status));
    }
}
