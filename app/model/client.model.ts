export class GPNClientContent{
  HeadLegalName="";
  Industry="";
  ContactList="";
  Segment = "";
  pyWorkParty;
}

export class GPNClient{
  caseTypeID : String;
  processID: String;
  content: GPNClientContent;
    childCases;

  constructor(){
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
