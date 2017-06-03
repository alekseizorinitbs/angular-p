import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import 'rxjs/add/operator/map';
import {HttpModule} from '@angular/http'
import {CaseService} from './services/case.service'
import {PortalComponent} from './portal/portal.component'
import {AssignmentsComponent} from './portal/assignments.component'
import {AssignmentComponent} from './components/assignment/assignment.component'
import {routing} from './app.routing'
import {HeaderComponent} from './components/header/header.component'
import {AssignmentService} from './services/assignment.service'
import {CacheService} from 'ng2-cache/ng2-cache'
import {AssignmentPerformBaseComponent} from './work/perform/base.component'
import {GPNRequest} from './model/gpn_request.model'
import {Assignment_Perform_CreateRequest_Component} from './work/perform/identificateClient/perform.createRequest.component'
import {Assignment_Perform_InitializeClient_Component} from './work/perform/identificateClient/perform.identificateClient.component'
import {LoginComponent} from './portal/login.component'
import {Local_RU} from './services/local_ru.service'
import {ContactListComponent} from './components/contactList/contact_list.component'
import {AddressListComponent} from './components/addressList/address_list.component'
import {GPN_Client_General_Info_Component} from './components/work/gpn_client_general_info.component'

@NgModule({
  imports:      [ BrowserModule,FormsModule, ReactiveFormsModule, HttpModule, routing ],
  declarations: [ AppComponent, PortalComponent, AssignmentsComponent, HeaderComponent, AssignmentComponent, AssignmentPerformBaseComponent,
              Assignment_Perform_CreateRequest_Component, LoginComponent,
                 Assignment_Perform_InitializeClient_Component, ContactListComponent, AddressListComponent, GPN_Client_General_Info_Component],
  bootstrap:    [ AppComponent ],
  providers:    [  CaseService, AssignmentService, CacheService, Local_RU ]
})
export class AppModule { }
