import {Component, AfterViewInit, Input, OnInit, ViewEncapsulation} from '@angular/core';
import { RouterModule, Router, ActivatedRoute, Params, CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {CaseService} from '../../../services/case.service'
import {GPNRequest, GPNRequestContent} from '../../../model/gpn_request.model'
import {GPNClientContent, GPNClient} from '../../../model/gpn_client.model'
import {Observable} from 'rxjs/Rx'
import {Http} from '@angular/http'
import {Assignment} from '../../../model/assignments.model'
import {AssignmentService} from '../../../services/assignment.service'
import {CacheService, CacheStoragesEnum} from 'ng2-cache/ng2-cache'
import {Local_RU} from '../../../services/local_ru.service'

@Component({
  selector: 'gp-client_perform',
  templateUrl: './app/work/perform/identificateClient/perform.identificateClient.html',
  styleUrls: ['app/work/perform/style.css'],
  encapsulation: ViewEncapsulation.None
})

export class Assignment_Perform_InitializeClient_Component implements OnInit{

    @Input()
    assignmentID;

    caseData: GPNClient = null;
    caseData_ru = new Object();
    assignmentData: any = null;

    childAssignments = [];

    constructor (protected caseService: CaseService, protected router: Router,
    protected assignmentService: AssignmentService, protected activatedRouter: ActivatedRoute,
  protected cacheService: CacheService, private _localRuService: Local_RU){

    }

    onDeletePhone(index){
    //  this.caseData.content.ContactList.splice(index,1);
    }

    onAddPhone(){

    }

    onSubmit(){
      this.performAssignment();
    }

    ngOnInit(){

      this.activatedRouter.params.subscribe(params => {
        console.log(params);
        this.caseService.getCase(params['assignmentId']).subscribe(caseData =>
        {
          this.caseData = caseData;
          this.localizePyStatusWork(caseData);
          this.caseData.content.pyWorkParty = {};

          if (caseData.childCases != null)
          for (let i = 0; i < this.caseData.childCases.length; i++){
              let child = this.caseData.childCases[i];
              this.childAssignments.push({caseId:child.ID, name:'Сделка ' + child.ID.substring(child.ID.lastIndexOf(' '))});
            }

          this.removeUndefined();


        });
      })

    }

    onAssignmentClicked(id){
      this.caseService.getCase(id).subscribe(
        case_ => {
            this.router.navigate(['perform/CreateOffer/' + case_.content.assignments[0]]);
          });

    }

    localizePyStatusWork(caseData){
        this.caseData_ru = this._localRuService.localize_GPNClient(caseData);
      }

      onRequestClicked(id){
        this.router.navigate(['perform/CreateOffer/',id]);
      }


    performAssignment(){
      this.assignmentService.performAssignment(this.caseData,this.caseData.assignments[0].ID,this.caseData.assignments[0].actions[0].ID).subscribe(data =>{
      });
    }

    private removeUndefined(){
      let caseTmp : GPNClient = new GPNClient();

      for(var key in caseTmp.content) {
        var value = this.caseData.content[key];
        if (value == undefined)
          this.caseData.content[key]="";
        }

        this.caseData.content.pyWorkParty = {};
        console.log(this.caseData.content);
    }

    initClient(e){
      this.assignmentService.performAssignment(this.caseData, this.caseData.assignments[0].ID, this.caseData.assignments[0].actions[0].ID)
      .subscribe(resp => {
        this.router.navigate(['assignments']);
      });
    }

    closeClient(e){
      this.caseService.launchLocalAction(this.caseData, "TerminateClient").subscribe(data =>{
        console.log(data);
          this.router.navigate(['assignments']);
      });
    }
}
