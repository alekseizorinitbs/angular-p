import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core'
import {Code_Pega_List} from '../../model/pega_list.model'

@Component({
  selector: 'gp-dropdown',
  templateUrl: 'app/components/dropdown/dropdown.html'
})

export class DropdownComponent implements OnInit{

  @Input()
  source: Code_Pega_List;

  @Input()
  readOnly: boolean;

  @Input()
  inputSelectedId;

  @Output()
  selected = new EventEmitter<String>();

  selectedOption = "Выберите...";

  ngOnInit(){
    this.source.pxResults.forEach(s => {
        if (s.Id == this.inputSelectedId){
            this.selectedOption = s.Label;
        }
    });
  }

  onClick(i){
    this.source.pxResults.forEach( r => {
        r.pySelected = false;
    });

    this.selectedOption = this.source.pxResults[i].Label;
    this.selected.emit(this.source.pxResults[i].Id);
  }

}
