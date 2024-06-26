import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Button } from "./Button";
import { DeleteModal } from "./DeleteModal";
import { UpdatePatientModal } from "./UpdatePatientModal";
import "./PersonalInfoSection.css";
import { useNavigate } from "react-router";

export const PersonalInfoSection = () => {
  const { patientId } = useParams();
  const [singlePatient, setSinglePatient] = useState(null);
  const [isLoading, setIsLoading] = useState();
  const [showUpdatePatientModal, setShowUpdatePatientModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [stale, setStale] = useState(false);
  const navigate = useNavigate();
  showDeleteModal;

  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/users/patients/${patientId}`)
      .then((response) => {
        if (!response.ok) {
          navigate("/login");
        }

        return response.json();
      })
      .then((data) => {
        const patientInfo = data.patient;
        setSinglePatient(patientInfo);
        setIsLoading(false);
        setStale(false);
      });
  }, [stale]);

  if (!singlePatient || isLoading) return <div>Loading...</div>;

  return (
    <>
      <div className="personalInfoSection">
        <table className="personalInfoTable">
          <tbody>
            <tr>
              <th>First Name: </th>
              <td>{singlePatient.firstName}</td>
            </tr>
            <tr>
              <th>Last Name: </th>
              <td>{singlePatient.lastName}</td>
            </tr>
            <tr>
              <th>Street Name: </th>
              <td>{singlePatient.streetName}</td>
            </tr>
            <tr>
              <th>City: </th>
              <td>{singlePatient.city}</td>
            </tr>
            <tr>
              <th>State: </th>
              <td>{singlePatient.state}</td>
            </tr>
            <tr>
              <th>Phone Number: </th>
              <td>{singlePatient.phoneNumber}</td>
            </tr>
            <tr>
              <th>Date of Birth: </th>
              <td>{singlePatient.d_birth}</td>
            </tr>
          </tbody>
        </table>
        <div className="personalInfoButtons">
          <Button
            type="update"
            onClick={() => {
              setShowUpdatePatientModal(true);
            }}
          >
            Edit Patient
          </Button>
          <div id="deletePatientButton">
            <Button type="delete" onClick={() => setShowDeleteModal(true)}>
              Delete Patient
            </Button>
          </div>
          <UpdatePatientModal
            showUpdatePatientModal={showUpdatePatientModal}
            setShowUpdatePatientModal={setShowUpdatePatientModal}
            singlePatient={singlePatient}
            setStale={setStale}
          />
          <DeleteModal
            showDeleteModal={showDeleteModal}
            setShowDeleteModal={setShowDeleteModal}
          >
            {"this patient?"}
          </DeleteModal>
        </div>
      </div>
    </>
  );
};
