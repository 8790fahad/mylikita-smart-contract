import {
  PatientRecords,
  Consultations,
  consultations,
  patientRecords,
} from "./model";
// import { ContractPromiseBatch, context } from "near-sdk-as";

// create patient record;
export function setPatientRecord(patientRecord: PatientRecords) {
  let _patientRecord = patientRecords.get(patientRecord.id);
  if (_patientRecord !== null) {
    throw new Error(`a patient with ${patientRecord.id} already exists`);
  }
  patientRecords.set(
    patientRecord.id,
    PatientRecords.fromPayload(patientRecord)
  );
}



// get patient by id
export function getPatientRecord(id: string): PatientRecords | null {
  return patientRecords.get(id);
}

// get all patient records
export function getAllPatientRecords(): PatientRecords[] | null {
  return patientRecords.values();
}


// add consultation record
export function setConsultation(consultation: Consultations) {
  let _consultation = consultations.get(consultation.id);
  if (_consultation !== null) {
    throw new Error(`a consultation with ${consultation.id} already exists`);
  }
  consultations.set(consultation.id, Consultations.fromPayload(consultation));
}
