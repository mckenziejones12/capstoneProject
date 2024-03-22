import React from "react";
import "./PatientDetailPage.css";
import { Layout } from "./Layout";
import { Button } from "./Button";
import { PersonalInfoSection } from "./PersonalInfoSection";
import { PatientNotesSection } from "./PatientNotesSection";
import { useState } from "react";
import { DeleteModal } from "./DeleteModal";

export const PatientDetailPage = () => {
  const [showModal, setShowModal] = useState(false);
  console.log(showModal);
  return (
    <Layout>
      <div id="patientDetailContent">
        <PersonalInfoSection />
        <PatientNotesSection />
      </div>
      <div id="deletePatientButton">
        <Button type="delete" onClick={() => setShowModal(true)}>
          Delete Patient
        </Button>
      </div>
      <DeleteModal showModal={showModal} setShowModal={setShowModal}>
        {"this patient?"}
      </DeleteModal>
    </Layout>
  );
};
