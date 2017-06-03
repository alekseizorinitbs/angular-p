import {Component,Input} from '@angular/core';
import {HeaderComponent} from '../header/header.component'
import {CaseService} from '../caseService/case.service'
import {GPNRequest, GPNRequestContent} from '../model/gpn_request.model'
import {Observable} from 'rxjs/Rx'
import {Http} from '@angular/http'
import {AssignmentsComponent} from './assignments.component'

@Component({
  selector: 'gp-portal',
  templateUrl: 'app/portal/portal.html',
  styleUrls: ['app/portal/style.css']
})

export class PortalComponent{

    constructor(private _caseService: CaseService){
    }

}
