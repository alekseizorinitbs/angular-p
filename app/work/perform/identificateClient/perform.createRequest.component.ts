import {Component, AfterViewInit, Input, OnInit, ViewEncapsulation, EventEmitter, Output} from '@angular/core';
import { RouterModule, Router, ActivatedRoute, Params } from '@angular/router';
import {CaseService} from '../../../caseService/case.service'
import {GPNRequest, GPNRequestContent} from '../../../model/gpn_request.model'
import {Observable} from 'rxjs/Rx'
import {Http} from '@angular/http'
import {Assignment} from '../../../model/assignments.model'
import {AssignmentService} from '../../../assignmentService/assignment.service'
import {CacheService, CacheStoragesEnum} from 'ng2-cache/ng2-cache'

@Component({
  selector: 'gp-assignment1',
  templateUrl: './app/work/perform/identificateClient/perform.createRequest.html',
  styleUrls: ['app/work/perform/style.css'],
  encapsulation: ViewEncapsulation.None
})

export class Assignment_Perform_CreateRequest_Component implements OnInit{

    @Input()
    assignmentID;

    attachedDocs = {};
    caseData_ru: any = new Object();
    caseData: GPNRequest = null;
    assignmentData: any = null;

    constructor (protected caseService: CaseService, protected router: Router,
    protected assignmentService: AssignmentService, protected activatedRouter: ActivatedRoute,
  protected cacheService: CacheService){

    }

    onDeletePhone(index){
      this.caseData.content.ContactList.splice(index,1);
    }

    onAddPhone(){
      if (this.caseData.content.ContactList == "")
        this.caseData.content.ContactList = [];

      this.caseData.content.ContactList.push({"pyPhoneNumber":"", "pxObjClass":"Data-Address"});
    }

    onSubmit(){
      this.assignmentService.performAssignment(this.caseData, this.cacheService.get('assignment')[0].ID,
    this.cacheService.get('assignment')[0].actions[0].ID).subscribe(data => {
      this.router.navigate(["home"]);
    });
    }

    localizePyStatusWork(caseData){
        if (caseData.content.pyStatusWork == "New") this.caseData_ru.pyStatusWork = new String("Ввод данных");
        if (caseData.content.pyStatusWork == "Open")  this.caseData_ru.pyStatusWork = new String("Клиент идентифицирован");

      }

    ngOnInit(){

      this.activatedRouter.params.subscribe(params => {
        this.caseService.getCase(params['assignmentId']).subscribe(caseData =>
        {

          this.caseData = caseData;
          this.localizePyStatusWork(caseData);
          this.caseData.content.pyWorkParty = {};
          this.removeUndefined();
          let pyID = params['assignmentId'].substring(params['assignmentId'].lastIndexOf(' ') + 1);
          console.log(pyID);
          this.caseService.getAttachedDocuments(pyID).subscribe(docs =>{
            this.attachedDocs = docs;
            console.log(docs);
          });
        });


      })

    }

    private removeUndefined(){
      let caseTmp : GPNRequest = new GPNRequest();

      for(var key in caseTmp.content) {
        var value =
         this.caseData.content[key];
        if (value == undefined)
          this.caseData.content[key]="";
        }
    }

  }
