import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import 'rxjs/add/operator/map';
import {HttpModule} from '@angular/http'
import {PostService} from './postService/post.service'
import {CaseService} from './caseService/case.service'
import {PortalComponent} from './portal/portal.component'
import {AssignmentsComponent} from './portal/assignments.component'
import {AssignmentComponent} from './assignment/assignment.component'
//import {Assignment1Component} from './assignment/assignment.createOffer.component'
//import {Assignment2Component} from './assignment/assignment2.component'
//import {AssignmentBaseLayerComponent} from './assignment/assignmentBaseLayer.component'
import {routing} from './app.routing'
import {HeaderComponent} from './header/header.component'
import {AssignmentService} from './assignmentService/assignment.service'
import {CacheService} from 'ng2-cache/ng2-cache'
//import {AssignmentPerformBaseComponent} from './work/perform/base.component'
import {Case1} from './model/case1.model'
import {Assignment_Perform_CreateRequest_Component} from './work/perform/identificateClient/perform.createRequest.component'
import {Assignment_Perform_InitializeClient_Component} from './work/perform/identificateClient/perform.identificateClient.component'
import {LoginComponent} from './portal/login.component'
import {ClientsComponent} from './clients/clients.component'

@NgModule({
  imports:      [ BrowserModule,FormsModule, ReactiveFormsModule, HttpModule, routing ],
  declarations: [ AppComponent, PortalComponent, AssignmentsComponent, HeaderComponent, AssignmentComponent,
              Assignment_Perform_CreateRequest_Component, LoginComponent,
                ClientsComponent, Assignment_Perform_InitializeClient_Component],
  bootstrap:    [ AppComponent ],
  providers:    [ PostService, CaseService, AssignmentService, CacheService, Case1 ]
})
export class AppModule { }
