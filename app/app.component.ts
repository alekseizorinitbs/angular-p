// <reference path="../typings/tsd.d.ts" />

import {Component, AfterViewInit} from '@angular/core';
import {Observable} from 'rxjs/Rx'
import {CaseService} from './caseService/case.service'
import {Http} from '@angular/http'
import {PortalComponent} from './portal/portal.component';
import {HeaderComponent} from './header/header.component'

@Component({
    selector: 'my-app',
    template: `<gp-header></gp-header>
    <router-outlet></router-outlet>`
})
export class AppComponent/* implements AfterViewInit*/  {

  caseID;

    constructor(private _caseService: CaseService){
    }
/*
    ngAfterViewInit(){

        var keyups = Observable.fromEvent($("#search"), "keyup")
        .map(e => e.target.value)
        .debounceTime(300)
        .filter(text => text.length > 3)
        .distinctUntilChanged()
        .flatMap(searchTerm => {
          var url = "https://api.spotify.com/api/v1/search?type=artist&q=" + searchTerm;
          var promise = $.getJSON(url);
          return Observable.fromPromise(promise);
        });

        keyups.subscribe(function(data) {
        });

    }*/

    onClick(){
      this._caseService.getCases().subscribe(cases => {
        this.caseID = cases.cases[1].ID;
      });
    }

    onOpenCase(){
      this._caseService.getCase(this.caseID).subscribe();
    }
}
