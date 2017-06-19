import {Component, AfterViewInit, Input, OnInit, ViewEncapsulation, EventEmitter, Output} from '@angular/core';
import { RouterModule, Router, ActivatedRoute, Params } from '@angular/router';
import {CaseService} from '../../../services/case.service'
import {GPNRequest, GPNRequestContent} from '../../../model/gpn_request.model'
import {Observable} from 'rxjs/Rx'
import {Http} from '@angular/http'
import {Assignment} from '../../../model/assignments.model'
import {AssignmentService} from '../../../services/assignment.service'
import {CacheService, CacheStoragesEnum} from 'ng2-cache/ng2-cache'
import {Local_RU} from '../../../services/local_ru.service'
import {DictService} from '../../../services/dict.service'

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
    caseData_ru = new Object();
    caseData: GPNRequest = null;
    assignmentData: any = null;
    cities;

    constructor (protected caseService: CaseService, protected router: Router,
    protected assignmentService: AssignmentService, protected activatedRouter: ActivatedRoute,
  protected cacheService: CacheService, private _localRuService: Local_RU, private _dict: DictService){

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
          this.caseData_ru = this._localRuService.localize_GPNClient(caseData.content);
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
          this.caseService.getAttachedDocuments(pyID).subscribe(docs =>{
            this.attachedDocs = docs;
          });
        });

        this._dict.getCities().subscribe(data => {
          this.cities = data;
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

    onInitRequest(e){
      this.assignmentService.performAssignment(this.caseData, this.caseData.assignments[0].ID, this.caseData.assignments[0].actions[0].ID)
      .subscribe(resp => {
        this.router.navigate(['assignments']);
      });
    }

    onCloseRequest(e){
      this.caseService.launchLocalAction(this.caseData, "TerminateRequest").subscribe(data =>{
          this.router.navigate(['assignments']);
      });
    }

    onConfirmRequest(e){
      this.assignmentService.performAssignment(this.caseData, this.caseData.assignments[0].ID, "ConfirmRequest")
      .subscribe(resp => {
        this.router.navigate(['assignments']);
      });
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

  onDownloadDoc(i){
    this.caseService.getDocument(this.attachedDocs.pxResults[i].pyGUID).subscribe(response => {
      var blob = this.b64toBlob(response._body, 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 512);
      var downloadUrl= window.URL.createObjectURL(blob);
      window.open(downloadUrl);
    })
  }


  }
