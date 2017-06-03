import {Component, AfterViewInit, Input, OnInit, ViewEncapsulation, AfterContentInit} from '@angular/core';
import { RouterModule, Router, ActivatedRoute, Params } from '@angular/router'
import {CaseService} from '../caseService/case.service'
import {Case1, Case1Content} from '../model/case1.model'
import {Observable} from 'rxjs/Rx'
import {Http} from '@angular/http'
import {Assignment} from '../model/assignments.model'
import {AssignmentService} from '../assignmentService/assignment.service'
import {AssignmentBaseLayerComponent} from './assignmentBaseLayer.component'
import {CacheService, CacheStoragesEnum} from 'ng2-cache/ng2-cache'

@Component({
    selector: 'gp-assignment2',
    templateUrl: 'app/assignment/assignment2.html',
    styleUrls: ['app/assignment/style.css'],
    encapsulation: ViewEncapsulation.None
})

export class Assignment2Component extends AssignmentBaseLayerComponent implements OnInit {

    constructor(protected caseService: CaseService, protected router: Router,
        protected assignmentService: AssignmentService, protected activatedRouter: ActivatedRoute,
        protected cacheService: CacheService) {
        super(caseService, router, assignmentService, activatedRouter, cacheService);
    }

    onSubmit() {
        this.assignmentService.performAssignment(this.caseData, this.cacheService.get('assignment')[0].ID,
            this.cacheService.get('assignment')[0].actions[0].ID).subscribe(data => {
                this.router.navigate(["home"]);
            });
    }

    ngOnInit() {
        this.caseData = this.cacheService.get('caseData')[0];
        this.caseData.content.pyWorkParty = {};
    }

}
