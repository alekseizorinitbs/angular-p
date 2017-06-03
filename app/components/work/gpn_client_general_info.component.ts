import {Component, Input, OnInit} from '@angular/core';
import {GPNClientContent} from '../../model/gpn_client.model'
import {Local_RU} from '../../services/local_ru.service'

@Component({
  selector: 'gp-client-general-info',
  templateUrl: 'app/components/work/gpn_client_general_info.html',
  styleUrls: ['app/components/work/style.css']
})

export class GPN_Client_General_Info_Component implements OnInit{

  @Input()
  client: GPNClientContent;
  @Input()
  client_ru: Local_RU;

  constructor(){
  }

  ngOnInit(){
    console.log(this.client_ru);
  }

}
