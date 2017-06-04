import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {GPNClientContent} from '../../../model/gpn_client.model'
import {GPNRequestContent} from '../../../model/gpn_request.model'
import {Local_RU} from '../../../services/local_ru.service'

@Component({
  selector: 'gp-request-general-info',
  templateUrl: 'app/components/work/gpn_request_general_info/gpn_request_general_info.html',
  styleUrls: ['app/components/work/style.css']
})

export class GPN_Request_General_Info_Component implements OnInit{


  @Input()
  request: GPNRequestContent;

  @Input()
  request_ru: GPNRequestContent;

  @Output()
  initRequest:EventEmitter<boolean> = new EventEmitter();

  @Output()
  closeRequest:EventEmitter<boolean> = new EventEmitter();

  @Output()
  confirmRequest:EventEmitter<boolean> = new EventEmitter();

  constructor(private local_ru: Local_RU){
  }

  ngOnInit(){
//    this.request_ru = this.local_ru.localize_GPNClient(this.request);
  }

  initRequestCall(b){
    this.initRequest.emit(true);
  }

  closeRequestCall(b){
    this.closeRequest.emit(true);
  }

  confirmRequestCall(b){
    this.confirmRequest.emit(true);
  }

}
