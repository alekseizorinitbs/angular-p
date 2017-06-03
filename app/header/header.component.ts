import {Component, Input, Output, EventEmitter} from '@angular/core';
import {CaseService} from '../caseService/case.service'
import {PortalComponent} from '../portal/portal.component'
import {AssignmentService} from '../assignmentService/assignment.service'
import {Case1, Case1Content} from '../model/case1.model'
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
        let _case: Case1 = new Case1();

        _case.caseTypeID = "PersonalEdition-AngularP-Work-GPNRequest";
        _case.processID = "pyStartCase";
        _case.content = new Case1Content();

        this._caseService.createCase(_case).subscribe(status => (status));
    }
}
