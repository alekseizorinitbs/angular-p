export class ClientContent{
  HeadLegalName="";
  Industry="";
  ContactList="";
  Segment = "";
  pyWorkParty;
}

export class Client{
  caseTypeID : String;
  processID: String;
  content: ClientContent;
    childCases;

  constructor(){
    this.content = new ClientContent();
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
