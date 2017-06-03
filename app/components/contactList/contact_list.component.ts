import {Component, Input, OnInit} from '@angular/core'
import {Data_Address} from '../../model/gpn_base.model'

@Component({
  selector: 'gp-contactList',
  templateUrl: 'app/components/contactList/contactList.html',
  styleUrls: ['app/components/contactList/style.css']
})

export class ContactListComponent implements OnInit{
  @Input()
  contacts: Data_Address[];

  @Input()
  readOnly: boolean;

  private _new: boolean[];
  private _newSaved: boolean[];
  private contactsSaved: Data_Address[];

  constructor(){

  }

  ngOnInit(){
    this._new = [];
    if (this.contacts != null)
    for (let i = 0; i < this.contacts.length; i++){
      this._new.push(false);
    }

    this.saveThisState();
  }

  onAdd(){
    this.saveThisState();
    this.contacts.push({"pxObjClass":"Data_Address", "pyPhoneNumber":"", "pyEmailAddress":"","pyLabel":""});
    this._new.push(true);
  }

  onDelete(i){
    this.saveThisState();
    this._new.splice(i,1);
    this.contacts.splice(i,1);
  }

  handleKeypress(event){

    if (event.code == 'KeyZ' && event.ctrlKey == true)
      this.restoreState();
  }

  saveThisState(){
    this._newSaved = this._new.slice();
    this.contactsSaved = this.contacts.slice();
  }

  restoreState(){
    this._new = this._newSaved.slice();
    this.contacts = this.contactsSaved.slice();
  }

}
