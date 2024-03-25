import React from "react";
import "./PatientDetailPage.css";
import { Layout } from "./Layout";
import { Button } from "./Button";
import { PersonalInfoSection } from "./PersonalInfoSection";
import { PatientNotesSection } from "./PatientNotesSection";
import { useState } from "react";
import { DeleteModal } from "./DeleteModal";

export const PatientDetailPage = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  console.log(showDeleteModal);
  return (
    <Layout>
      <div id="patientDetailContent">
        <PersonalInfoSection />
        <PatientNotesSection />
      </div>
      <div id="deletePatientButton">
        <Button type="delete" onClick={() => setShowDeleteModal(true)}>
          Delete Patient
        </Button>
      </div>
      <DeleteModal
        showDeleteModal={showDeleteModal}
        setShowDeleteModal={setShowDeleteModal}
      >
        {"this patient?"}
      </DeleteModal>
    </Layout>
  );
};
