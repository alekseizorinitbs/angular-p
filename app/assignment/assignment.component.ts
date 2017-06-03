import {Component, OnInit, Input} from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import {CaseService} from '../caseService/case.service'
import {Case1, Case1Content} from '../model/case1.model'
import {Observable} from 'rxjs/Rx'
import {Http} from '@angular/http'
import {Assignment} from '../model/assignments.model'
import {AssignmentService} from '../assignmentService/assignment.service'
import {CacheService, CacheStoragesEnum} from 'ng2-cache/ng2-cache'

@Component({
  selector: 'gp-assignment',
  templateUrl: 'app/assignment/assignment.html',
  styleUrls: ['app/assignment/style.css']
})

export class AssignmentComponent implements OnInit{
    @Input()
    client;

    constructor(private _caseService: CaseService, private _router: Router,
      private _assignmentService: AssignmentService, private _cacheService : CacheService){

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
