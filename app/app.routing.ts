import { RouterModule, Router, CanActivate } from '@angular/router';
import {AppComponent} from './app.component'
import {PortalComponent} from './portal/portal.component';
import {AssignmentsComponent} from './portal/assignments.component';
import {Assignment1Component} from './assignment/assignment.createOffer.component';
import {Assignment2Component} from './assignment/assignment2.component';
import {AssignmentBaseLayerComponent} from './assignment/assignmentBaseLayer.component';
import {AssignmentAction} from './model/assignments.model'
import {AssignmentPerformBaseComponent} from './work/perform/base.component'
import {Assignment_Perform_CreateRequest_Component} from './work/perform/identificateClient/perform.createRequest.component'
import {Assignment_Perform_InitializeClient_Component} from './work/perform/identificateClient/perform.identificateClient.component'
import {LoginComponent} from './portal/login.component'
import {ClientsComponent} from './clients/clients.component'


export const routing = RouterModule.forRoot(
  [
    {path:'home', component: PortalComponent},
    {path:'assignments', component: AssignmentsComponent},
    {path:'perform', component: AssignmentPerformBaseComponent,
        children:[
          {
            path: 'CreateOffer/:assignmentId',
            component: Assignment_Perform_CreateRequest_Component
          },
          {
            path: 'identificateClient/:assignmentId',
            component: Assignment_Perform_InitializeClient_Component
          }
        ]
      },
      {
        path:'login', component: LoginComponent
      },

    {path:'**', component: PortalComponent}
  ],
  {useHash: true}
);
