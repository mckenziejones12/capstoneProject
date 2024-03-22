import "./DeleteModal.css";
import { Button } from "./Button";
import { useParams } from "react-router";
import { useState } from "react";

export const DeleteModal = ({ showModal, setShowModal, children }) => {
  console.log(showModal);
  if (!showModal) return null;
  const { patientId } = useParams();
  const [patientList, setPatientList] = useState([]);

  const handleDeletePatient = () => {
    console.log("Delete patient: ", patientId);
  };
  return (
    <div className="deleteModal">
      <div id="closeModalBtn" onClick={() => setShowModal(false)}>
        x
      </div>
      <div>
        This action cannot be undone. Are you sure you want to delete {children}
      </div>
      <div className="deletePatientButton">
        <Button type="delete" onClick={handleDeletePatient(patientId)}>
          Delete
        </Button>
      </div>
    </div>
  );
};
