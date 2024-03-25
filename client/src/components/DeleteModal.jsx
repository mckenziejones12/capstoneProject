import "./DeleteModal.css";
import { Button } from "./Button";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const DeleteModal = ({
  showDeleteModal,
  setShowDeleteModal,
  children,
}) => {
  console.log(showDeleteModal);
  const { patientId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleDeletePatient = () => {
    console.log("Delete Patient: ", patientId);
    fetch(`/api/users/patients/${patientId}`, {
      method: "DELETE",
    }).then((response) => {
      navigate("/");
    });
  };
  if (!showDeleteModal) return null;

  return (
    <div className="deleteModal">
      <div id="closeModalBtn" onClick={() => setShowDeleteModal(false)}>
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
