import { logging } from "near-sdk-as";
import {
  PatientRecords,
  Consultations,
  consultations,
  patientRecords,
} from "./model";
// import { ContractPromiseBatch, context } from "near-sdk-as";

// create patient record;
export function setPatientRecord(patientRecord: PatientRecords): void {
  let _patientRecord = patientRecords.get(patientRecord.id);
  if (_patientRecord !== null) {
    throw new Error(`a patient with ${patientRecord.id} already exists`);
  }
  patientRecords.set(
    patientRecord.patientId,
    PatientRecords.fromPayload(patientRecord)
  );
}

// get patient by id
export function getPatientRecord(id: string): PatientRecords | null {
  return patientRecords.get(id);
}

// get patient by id
export function getByFacilityId(facilityId: string): PatientRecords | null {
  return patientRecords.getSome(facilityId);
}

// get all patient records
export function getAllPatientRecords(): PatientRecords[] | null {
  return patientRecords.values();
}

// update patient record status
export function updatePatientStatus(
  seen_by: string,
  date_seen: string,
  id: string
): void {
  const obj = patientRecords.get(id);
  if (obj == null) {
    throw new Error("Record not found");
  } else {
    assert(date_seen.length == 10, "Date has to be in the format: YYYY-MM-DD");
    assert(seen_by.length <= 0, "Please provide username");
    obj.seen_by = seen_by;
    obj.date_seen = date_seen;
    patientRecords.set(obj.id, obj);
  }
}

export function assignPatient(
  username: string,
  date: string,
  patientId: string
): void {
  const obj = patientRecords.get(patientId);
  if (obj == null) throw new Error("Record not found");
  else obj.assigned_to = username;
  obj.date_assigned = date;
  patientRecords.set(obj.patientId, obj);
}

// update patient record status
export function updatePatientRecord(
  id: string,
  patientRecord: PatientRecords
): void {
  const obj = patientRecords.get(id);
  if (obj == null) throw new Error("Record not found");
  else obj.accountType = patientRecord.accountType;
  obj.firstname = patientRecord.firstname;
  obj.other = patientRecord.other;
  obj.gender = patientRecord.gender;
  obj.age = patientRecord.age;
  obj.maritalStatus = patientRecord.maritalStatus;
  obj.occupation = patientRecord.occupation;
  obj.phoneNumber = patientRecord.phoneNumber;
  obj.email = patientRecord.email;
  obj.address = patientRecord.address;
  obj.kinName = patientRecord.kinName;
  obj.kinRelationship = patientRecord.kinRelationship;
  obj.kinPhone = patientRecord.kinPhone;
  obj.kinEmail = patientRecord.kinEmail;
  obj.kinAddress = patientRecord.kinAddress;
  patientRecords.set(obj.id, obj);
}

// add consultation record
export function setConsultation(consultation: Consultations): void {
  let _consultation = consultations.get(consultation.id);
  if (_consultation !== null) {
    throw new Error(`a consultation with ${consultation.id} already exists`);
  }
  consultations.set(consultation.id, Consultations.fromPayload(consultation));
}

// get all patient records
export function getConsultationHistory(): Consultations[] | null {
  return consultations.values();
}

export function getAssignPatient(): PatientRecords[] | null {
  let arr: PatientRecords[];
  for (let i = 0, k = patientRecords.length; i < k; ++i) {
    // return patientRecords.keys(i)
    //   logging.log( patientRecords.entries(i));
    //  patientRecords.entries(i)
  }
  // for (let i = 0; i < patientRecords.length; i++) {
  // if (_patientRecords[i].assigned_to == assigned_to) {
  // arr.push(_patientRecords[i])
  logging.log(patientRecords.length);
  // logging.log("_patientRecords[i]");
  // }
  // }
  return patientRecords.values();
}
