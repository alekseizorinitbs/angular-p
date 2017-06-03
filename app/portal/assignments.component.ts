import {Component, Input, OnInit} from '@angular/core';
import {HeaderComponent} from '../header/header.component'
import {PortalComponent} from './portal.component'
import {CaseService} from '../caseService/case.service'
import {GPNRequest, Case1Content} from '../model/gpn_request.model'
import {Observable} from 'rxjs/Rx'
import {Http} from '@angular/http'
import {Assignments} from '../model/assignments.model'
import {AssignmentService} from '../assignmentService/assignment.service'

@Component({
  selector: 'gp-assignments',
  templateUrl: 'app/portal/assignments.html',
  styleUrls: ['app/portal/style.css']
})

export class AssignmentsComponent implements OnInit{

  assignments : Assignments = null;
  clients;

    constructor(private _caseService: CaseService, private _assignmentService: AssignmentService){
    }

    loadUnresolvedClients(){
      this._caseService.getUnresolvedClients().subscribe(data => {
          this.clients = data;
      });
    }

    loadAssignments(){
        this._assignmentService.getAssignments().subscribe(data => {
          this.assignments = data;

          for(let i = 0; i < this.assignments.assignments.length; i++){
            let str :String = this.assignments.assignments[i].ID;
            str = str.substr(str.lastIndexOf('!'));

            if (str == '!CREATEOFFER')
              this.assignments.assignments.splice(i,1);

              if (str == '!INITIALIZECLIENT')
                this.assignments.assignments[i].name = 'Инициализация клиента';
          }
        });
    }

    ngOnInit(){
      //this.loadAssignments();
      this.loadUnresolvedClients();
       }

    setAssignments(obj){
      this.assignments = obj;
    }

}
