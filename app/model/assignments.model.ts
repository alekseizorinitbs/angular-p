export class Assignment{
  caseID: String;
  ID: String;
  name: String;
  pxObjClass: String;
  routedTo: String;
  type: String;
  urgency: number;
  actions: any;
}

export class Assignments{
  pxObjClass: String;
  assignments: Assignment[];
}

export class AssignmentAction{
  static CreateOffer = "CreateOffer";
  static SubmitOffer = "SubmitOffer";
}
