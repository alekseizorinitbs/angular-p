import {Data_Party, Data_Address} from './gpn_base.model'

export class Case1Content{
  FuelType;
  FuelConsumption;
  ServiceOffice;
  ServiceRegion;
  Party: Data_Party[];
  Currency;
  BillAccount;
  IsResident;
  Bank;
  Contacts : Data_Address[];
  PDF;
  BIK;
  CorrAccount;
  IsStateFinanced;
  OKPO;
  KPP;
  INN;
  OGRN;
  HeadLegalName;
  Industry;
  OrganizationLegalName;
  ContactList;
  pyWorkParty;
  Segment;
}

export class GPNRequest{
  caseTypeID : String;
  processID: String;
  parentCaseID;
  content: Case1Content;
  assignments;

  constructor(){
    this.content = new Case1Content();
    this.content.Industry = "";
    this.content.Currency="";
    this.content.BillAccount="";
    this.content.IsResident="";
    this.content.Bank="";
    this.content.PDF="";
    this.content.BIK="";
    this.content.CorrAccount="";
    this.content.IsStateFinanced="";
    this.content.OKPO="";
    this.content.KPP="";
    this.content.INN="";
    this.content.OGRN="";
    this.content.HeadLegalName="";
    this.content.Industry="";
    this.content.OrganizationLegalName="";
    this.content.ContactList="";
    this.content.pyWorkParty="";
    this.content.Segment = "";
  }
}
