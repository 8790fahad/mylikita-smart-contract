import { PersistentUnorderedMap, context } from "near-sdk-as";

@nearBindgen
export class PatientRecords {
  facilityId: string;
  title: string;
  accountType: string;
  surname: string;
  firstname: string;
  other: string;
  gender: string;
  age: u64;
  maritalStatus: string;
  DOB: string;
  dateCreated: string;
  phoneNumber: string;
  email: string;
  state: string;
  lga: string;
  occupation: string;
  address: string;
  kinName: string;
  kinRelationship: string;
  kinPhone: string;
  kinEmail: string;
  kinAddress: string;
  accountNo: string;
  beneficiaryNo: string;
  balance: u32;
  id: string;
  patientId: string;
  enteredBy: string;
  patientStatus: string;
  assigned_to: string;
  createdAt: string;
  date_assigned: string;
  status: string;
  hematology: string;
  microbiology: string;
  chem_path: string;
  radiology: string;
  seen_by: string;
  date_seen: string;
  owner: string;
  public static fromPayload(payload: PatientRecords): PatientRecords {
    const patientRecord = new PatientRecords();
    patientRecord.facilityId = payload.facilityId;
    patientRecord.title = payload.title;
    patientRecord.accountType = payload.accountType;
    patientRecord.surname = payload.surname;
    patientRecord.firstname = payload.firstname;
    patientRecord.other = payload.other;
    patientRecord.gender = payload.gender;
    patientRecord.age = payload.age;
    patientRecord.maritalStatus = payload.maritalStatus;
    patientRecord.DOB = payload.DOB;
    patientRecord.dateCreated = payload.dateCreated;
    patientRecord.phoneNumber = payload.phoneNumber;
    patientRecord.email = payload.email;
    patientRecord.state = payload.state;
    patientRecord.lga = payload.lga;
    patientRecord.occupation = payload.occupation;
    patientRecord.address = payload.address;
    patientRecord.kinName = payload.kinName;
    patientRecord.kinRelationship = payload.kinRelationship;
    patientRecord.kinPhone = payload.kinPhone;
    patientRecord.kinEmail = payload.kinEmail;
    patientRecord.kinAddress = payload.kinAddress;
    patientRecord.accountNo = payload.accountNo;
    patientRecord.beneficiaryNo = payload.beneficiaryNo;
    patientRecord.balance = payload.balance;
    patientRecord.id = payload.id;
    patientRecord.patientId = payload.patientId;
    patientRecord.enteredBy = payload.enteredBy;
    patientRecord.patientStatus = payload.patientStatus;
    patientRecord.assigned_to = payload.assigned_to;
    patientRecord.createdAt = payload.createdAt;
    patientRecord.date_assigned = payload.date_assigned;
    patientRecord.status = payload.status;
    patientRecord.seen_by = payload.seen_by;
    patientRecord.date_seen = payload.date_seen;
    patientRecord.owner = context.sender;
    return patientRecord;
  }
}

@nearBindgen
export class Consultations {
  id: string;
  patient_id: string;
  userId: string;
  consultation_notes: string;
  treatmentPlan: string;
  decision: string;
  dressing_request: string;
  nursing_request: string;
  nursing_request_status: string;
  facilityId: string;
  created_at: string;
  treatment_plan_status: string;
  treated_by: string;
  public static fromPayload(payload: Consultations): Consultations {
    const consultations = new Consultations();
    consultations.id = payload.id;
    consultations.patient_id = payload.patient_id;
    consultations.userId = payload.userId;
    consultations.consultation_notes = payload.consultation_notes;
    consultations.treatmentPlan = payload.treatmentPlan;
    consultations.decision = payload.decision;
    consultations.dressing_request = payload.dressing_request;
    consultations.nursing_request = payload.nursing_request;
    consultations.nursing_request_status = payload.nursing_request_status;
    consultations.facilityId = payload.facilityId;
    consultations.created_at = payload.created_at;
    consultations.treatment_plan_status = payload.treatment_plan_status;
    consultations.treated_by = payload.treated_by;
    return consultations;
  }
}

export const consultations = new PersistentUnorderedMap<string, Consultations>(
  "CONSULTATIONS"
);

export const patientRecords = new PersistentUnorderedMap<
  string,
  PatientRecords
>("PATIENT-RECORDS");
