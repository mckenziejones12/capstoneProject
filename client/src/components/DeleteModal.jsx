import "./DeleteModal.css";
import { useState } from "react";
import { Button } from "./Button";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

export const DeleteModal = ({
  showDeleteModal,
  setShowDeleteModal,
  children,
}) => {
  const [isUnauthorized, setUnauthorized] = useState(false);
  const { patientId } = useParams();
  const navigate = useNavigate();

  const handleDeletePatient = () => {
    fetch(`/api/users/patients/${patientId}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.status === 401) {
        // they are not authorized to do the action
        // pop up an alert saying not authorized
        setUnauthorized(true);
      } else {
        navigate("/");
        setUnauthorized(false);
      }
    });
  };
  if (!showDeleteModal) return null;

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
    setUnauthorized(false);
  };

  return (
    <div className="deleteModal">
      <div id="closeModalBtn" onClick={closeDeleteModal}>
        x
      </div>
      {isUnauthorized && (
        <div>Warning: you are not authorized to perform this action!</div>
      )}
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
