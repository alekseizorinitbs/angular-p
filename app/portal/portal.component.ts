import {Component,Input} from '@angular/core';
import {HeaderComponent} from '../components/header/header.component'
import {CaseService} from '../services/case.service'
import {GPNRequest, Case1Content} from '../model/gpn_request.model'
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
