import {Component, AfterViewInit, Input, OnInit, ViewEncapsulation} from '@angular/core';
import { RouterModule, Router, ActivatedRoute, Params } from '@angular/router';
import {CaseService} from '../caseService/case.service'
import {Case1, Case1Content} from '../model/case1.model'
import {Observable} from 'rxjs/Rx'
import {Http} from '@angular/http'
import {Assignment} from '../model/assignments.model'
import {AssignmentService} from '../assignmentService/assignment.service'
import {CacheService, CacheStoragesEnum} from 'ng2-cache/ng2-cache'

@Component({
  selector: 'gp-assignment1',
  templateUrl: 'app/assignment/assignment.createOffer.html',
  styleUrls: ['app/assignment/style.css'],
  encapsulation: ViewEncapsulation.None
})

export class Assignment1Component implements OnInit{

    @Input()
    assignmentID;

    caseData: any = null;
    assignmentData: any = null;

    constructor (protected caseService: CaseService, protected router: Router,
    protected assignmentService: AssignmentService, protected activatedRouter: ActivatedRoute,
  protected cacheService: CacheService){

    }

    onSubmit(){
      this.assignmentService.performAssignment(this.caseData, this.cacheService.get('assignment')[0].ID,
    this.cacheService.get('assignment')[0].actions[0].ID).subscribe(data => {
      this.router.navigate(["home"]);
    });
    }

    ngOnInit(){
      this.caseData = this.cacheService.get('caseData')[0];
      this.caseData.content.pyWorkParty = {};
    }
}
