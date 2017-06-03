import {Component, Input, Output, EventEmitter} from '@angular/core';
import {CaseService} from '../caseService/case.service'
import {AssignmentService} from '../assignmentService/assignment.service'
import {Case1, Case1Content} from '../model/case1.model'
import {Observable} from 'rxjs/Rx'

@Component({
  selector: 'gp-clients',
  templateUrl: 'app/clients/clients.html'
})

export class ClientsComponent{

  clients : Case1 = null;

    constructor(private _caseService: CaseService, private _assignmentService: AssignmentService){
    }

    loadClients(){

    }

    ngOnInit(){
      this.loadClients();
    }


}
