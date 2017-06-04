import {GPNBaseContent, GPNBase, Data_Address, Data_Party} from './gpn_base.model'

export class GPNClientContent extends GPNBaseContent{
  HeadLegalName="";
  Industry="";
  ContactList: Data_Address[];
  AddressList: Data_Party[];
  Segment = "";
  pyWorkParty;
  CorrAccount;
  BillAccount;
  Currency;
  BIK;
}

export class GPNClient extends GPNBase{
  content: GPNClientContent;
    childCases;

  constructor(){
    super();
    this.content = new GPNClientContent();
    this.content.HeadLegalName="";
    this.content.Industry="";
    this.content.ContactList=[];
    this.content.AddressList=[];
    this.content.Segment = "";
    this.content.CorrAccount="";
    this.content.BillAccount="";
    this.content.Currency="";
    this.content.BIK="";
  }
}
