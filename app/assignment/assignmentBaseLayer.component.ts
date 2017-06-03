import {Component, AfterViewInit, Input, OnInit} from '@angular/core';
import { RouterModule, Router, Params, ActivatedRoute } from '@angular/router';
import {CaseService} from '../caseService/case.service'
import {Case1, Case1Content} from '../model/case1.model'
import {Observable} from 'rxjs/Rx'
import {Http} from '@angular/http'
import {Assignment, AssignmentAction} from '../model/assignments.model'
import {AssignmentService} from '../assignmentService/assignment.service'
import {CacheService, CacheStoragesEnum} from 'ng2-cache/ng2-cache'

@Component({
  selector: 'gp-assignment-baselayer',
  templateUrl: './app/assignment/assignmentBaseLayer.html',
  styleUrls: ['app/assignment/style.css']
})

export class AssignmentBaseLayerComponent implements OnInit {


  public caseData: any = null;
  protected assignmentData: any = null;
  protected paramsNode :ActivatedRoute;

  constructor (protected caseService: CaseService, protected router: Router,
  protected assignmentService: AssignmentService,
  protected activatedRouter: ActivatedRoute, protected cacheService: CacheService){

  }

  ngOnInit(){

    if (this.caseData == null){

        //let assignmentID = params['assignmentID'];
        let assignmentID = this.cacheService.get('assignment')[0].ID;
        let assignment = this.cacheService.get('assignment')[0];

        this.assignmentService.getAssignment(assignmentID).subscribe((data:any) => {
          this.assignmentData = data;
          this.caseService.getCase(data.caseID).subscribe(caseData =>{
            this.caseData = caseData;
            this.caseService.cacheCaseData(caseData);
            this.cacheService.set('caseData',[caseData]);
          
            if (assignment.actions[0].ID == AssignmentAction.CreateOffer){
              this.router.navigate([AssignmentAction.CreateOffer, assignment.ID], {relativeTo: this.activatedRouter});
            }
            else if (assignment.actions[0].ID == AssignmentAction.SubmitOffer){
              this.router.navigate(["type2"], {relativeTo: this.activatedRouter});
            }
          }
        );


    });
    }

  }

  public getCaseData(){
    return this.caseData;
  }

  setCaseData(caseData){
    this.caseData = caseData;
  }


}
