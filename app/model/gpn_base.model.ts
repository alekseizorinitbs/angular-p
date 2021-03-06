export class GPNBaseContent{
  pyID;
  pyLabel;
  pySelected;
  pyWorkParty;
  pyStatusWork;
  IsStateFinanced;
  IsResident;
  INN;
  KPP;
  OKPO;
}

export class GPNBase{
  caseTypeID : String;
  ID;
  lastUpdateTime;
  processID: String;
  content: GPNBaseContent;
  content_ru: GPNBaseContent;
  assignments: any;
  childCases;

  constructor(){
    this.content = new GPNBaseContent();
    this.content_ru = new GPNBaseContent();
    this.content.pyStatusWork = "";
  }
}

export class Data_Party{
  pxObjClass;
  pyAddress;
  pyLabel;
}

export class Data_Address{
  pxObjClass;
  pyPhoneNumber;
  pyEmailAddress;
  pyLabel;
}
