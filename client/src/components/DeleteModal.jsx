import "./DeleteModal.css";
import { Button } from "./Button";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const DeleteModal = ({ showModal, setShowModal, children }) => {
  console.log(showModal);
  if (!showModal) return null;
  const { patientId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleDeletePatient = () => {
    console.log("Delete Patient: ", patientId);
    fetch(`/api/users/patients/${patientId}`, {
      method: "DELETE",
    }).then((res) => {
      navigate("/");
    });
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
        <Button type="delete" onClick={handleDeletePatient}>
          Delete
        </Button>
      </div>
    </div>
  );
};
