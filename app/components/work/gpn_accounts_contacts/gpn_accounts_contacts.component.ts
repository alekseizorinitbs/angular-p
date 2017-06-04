import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {GPNClientContent} from '../../../model/gpn_client.model'
import {Local_RU} from '../../../services/local_ru.service'

@Component({
  selector: 'gp-client-accounts-info',
  templateUrl: 'app/components/work/gpn_accounts_contacts/gpn_accounts_contacts.html',
  styleUrls: ['app/components/work/style.css']
})

export class GPN_Accounts_Contacts_Component implements OnInit{

  @Input()
  client: GPNClientContent;
  @Input()
  client_ru: Local_RU;


  constructor(){
  }

  ngOnInit(){

  }

}
