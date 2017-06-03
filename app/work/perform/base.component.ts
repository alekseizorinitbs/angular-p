import {Component, AfterViewInit, Input, OnInit} from '@angular/core';
import { RouterModule, Router, Params, ActivatedRoute } from '@angular/router';
import {CaseService} from '../../caseService/case.service'
import {GPNRequest, Case1Content} from '../../model/gpn_request.model'
import {ClientContent, Client} from '../../model/client.model'
import {Observable} from 'rxjs/Rx'
import {Http} from '@angular/http'
import {Assignment, AssignmentAction} from '../../model/assignments.model'
import {AssignmentService} from '../../assignmentService/assignment.service'
import {CacheService, CacheStoragesEnum} from 'ng2-cache/ng2-cache'

@Component({
  selector: 'gp-assignment-baselayer',
  templateUrl: './app/work/perform/base.html',
  styleUrls: ['app/work/perform/style.css']
})

export class AssignmentPerformBaseComponent implements OnInit {

  @Input()
  onInit;

  public caseData: any = null;
  protected parentCaseData: Client;
  protected assignmentData: any = null;
  protected paramsNode :ActivatedRoute;
  protected attachedDocs = null;

  constructor (protected caseService: CaseService, protected router: Router,
  protected assignmentService: AssignmentService,
  protected activatedRouter: ActivatedRoute, protected cacheService: CacheService){
    this.caseService.parentCase$.subscribe(newCaseData =>{
      console.log(newCaseData);
      this.caseData = newCaseData;
    });
  }


  reInit(){
    console.log("reinit called");
  }

  ngOnInit(){


  }

  getParentCaseData(childCase: GPNRequest){
    if (childCase.parentCaseID != undefined){
      this.caseService.getCase(childCase.parentCaseID).subscribe(data => {
        this.parentCaseData = data;
        this.cacheService.set('parentCase',data);
      });
    }
  }

  b64toBlob(b64Data, contentType, sliceSize) {
  contentType = contentType || '';
  sliceSize = sliceSize || 512;

  var byteCharacters = atob(b64Data);
  var byteArrays = [];

  for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    var slice = byteCharacters.slice(offset, offset + sliceSize);

    var byteNumbers = new Array(slice.length);
    for (var i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    var byteArray = new Uint8Array(byteNumbers);

    byteArrays.push(byteArray);
  }

  var blob = new Blob(byteArrays, {type: contentType});
  return blob;
}

  public getCaseData(){
    return this.caseData;
  }

  setCaseData(caseData){
    this.caseData = caseData;
  }

  onDownloadDoc(i){
    this.caseService.getDocument(this.attachedDocs.pxResults[i].pyGUID).subscribe(response => {
      var blob = this.b64toBlob(response._body, 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 512);
      var downloadUrl= window.URL.createObjectURL(blob);
      window.open(downloadUrl);
    })
  }


}
