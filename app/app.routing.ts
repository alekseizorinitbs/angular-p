import { RouterModule, Router, CanActivate } from '@angular/router';
import {AppComponent} from './app.component'
import {PortalComponent} from './portal/portal.component';
import {AssignmentsComponent} from './portal/assignments.component';
import {AssignmentAction} from './model/assignments.model'
import {AssignmentPerformBaseComponent} from './work/perform/base.component'
import {Assignment_Perform_CreateRequest_Component} from './work/perform/identificateClient/perform.createRequest.component'
import {Assignment_Perform_InitializeClient_Component} from './work/perform/identificateClient/perform.identificateClient.component'
import {LoginComponent} from './portal/login.component'
import {AuthenticatedGuard} from './services/authguard.service'


export const routing = RouterModule.forRoot(
  [
    {path:'home', component: PortalComponent, canActivate:[AuthenticatedGuard]},
    {path:'assignments', component: AssignmentsComponent, canActivate:[AuthenticatedGuard]},
    {path:'perform', component: AssignmentPerformBaseComponent, canActivate:[AuthenticatedGuard],
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

    {path:'**', component: PortalComponent, canActivate:[AuthenticatedGuard]}
  ],
  {useHash: true}
);
