import {Component, Input, OnInit} from '@angular/core'
import {Data_Address, Data_Party} from '../../model/gpn_base.model'

@Component({
  selector: 'gp-addressList',
  templateUrl: 'app/components/addressList/addressList.html',
  styleUrls: ['app/components/contactList/style.css']
})

export class AddressListComponent implements OnInit{
  @Input()
  addresses: Data_Party[];

  @Input()
  readOnly: boolean;

  private _new: boolean[];
  private _newSaved: boolean[];
  private addressesSaved: Data_Party[];

  constructor(){

  }

  ngOnInit(){
    this._new = [];
    if (this.addresses != null)
    for (let i = 0; i < this.addresses.length; i++){
      this._new.push(false);
    }

    this.saveThisState();
  }

  onAdd(){
    this.saveThisState();
    this.addresses.push({"pxObjClass":"Data_Party", "pyAddress":"","pyLabel":""});
    this._new.push(true);
  }

  onDelete(i){
    this.saveThisState();
    this._new.splice(i,1);
    this.addresses.splice(i,1);
  }

  handleKeypress(event){

    if (event.code == 'KeyZ' && event.ctrlKey == true)
      this.restoreState();
  }

  saveThisState(){
    this._newSaved = this._new.slice();
    this.addressesSaved = this.addresses.slice();
  }


  restoreState(){
    this._new = this._newSaved.slice();
    this.addresses = this.addressesSaved.slice();
  }

}
