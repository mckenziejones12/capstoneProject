import React from "react";
import "./PatientDetailPage.css";
import { Layout } from "./Layout";
import { Button } from "./Button";
import { PersonalInfoSection } from "./PersonalInfoSection";
import { PatientNotesSection } from "./PatientNotesSection";
import { useState } from "react";
import { DeleteModal } from "./DeleteModal";

export const PatientDetailPage = () => {
  return (
    <Layout>
      <div id="patientDetailContent">
        <PersonalInfoSection />
        <PatientNotesSection />
      </div>
    </Layout>
  );
};
