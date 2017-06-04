import {Component, OnInit, Input} from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import {CaseService} from '../../services/case.service'
import {GPNRequest, GPNRequestContent} from '../../model/gpn_request.model'
import {Observable} from 'rxjs/Rx'
import {Http} from '@angular/http'
import {Assignment} from '../../model/assignments.model'
import {AssignmentService} from '../../services/assignment.service'
import {CacheService, CacheStoragesEnum} from 'ng2-cache/ng2-cache'
import {Local_RU} from '../../services/local_ru.service'

@Component({
  selector: 'gp-assignment',
  templateUrl: 'app/components/assignment/assignment.html',
  styleUrls: ['app/components/assignment/style.css']
})

export class AssignmentComponent implements OnInit{
    @Input()
    client;

    constructor(private _caseService: CaseService, private _router: Router,
      private _assignmentService: AssignmentService, private _cacheService : CacheService, private _local_ru: Local_RU){

        }

        ngOnInit(){

          switch (this.client.pyStatusWork){
            case "New": this.client.pyStatusWork = "Ввод данных";
            break;

            case "Open":  this.client.pyStatusWork = "Клиент идентифицирован";
            break;
        }

    }

    onClick(){
        this._router.navigate(['perform/identificateClient/' + this.client.pzInsKey]);
    }



/*
    onClick(){
      this._assignmentService.getAssignment(this.assignment.ID).subscribe(
        assignment => {
          this.assignment = assignment;
            this._cacheService.set('assignment', [this.assignment]);
            this._router.navigate(['perform/identificateClient/' + this.assignment.ID]);
        }
      );

    }*/

}
