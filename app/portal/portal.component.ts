import {Component,Input} from '@angular/core';
import {HeaderComponent} from '../header/header.component'
import {CaseService} from '../caseService/case.service'
import {Case1, Case1Content} from '../model/case1.model'
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
