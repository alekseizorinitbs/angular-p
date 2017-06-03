import {GPNBaseContent, GPNBase} from './gpn_base.model'

export class GPNClientContent extends GPNBaseContent{
  HeadLegalName="";
  Industry="";
  ContactList="";
  Segment = "";
  pyWorkParty;
}

export class GPNClient extends GPNBase{
  content: GPNClientContent;
    childCases;

  constructor(){
    super();
    this.content = new GPNClientContent();
    this.content.HeadLegalName="";
    this.content.Industry="";
    this.content.ContactList="";
    this.content.Segment = "";
  }
}

export class Data_Party{

}

export class Data_Address{

}
