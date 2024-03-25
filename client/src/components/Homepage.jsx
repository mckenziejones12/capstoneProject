import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Button } from "./Button";
import { PatientFormModal } from "./PatientFormModal";
import { Layout } from "./Layout";
import "./Homepage.css";

export const Homepage = () => {
  const [patientList, setPatientList] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [showModal, setShowModal] = useState(false);
  const [stale, setStale] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/users/patients")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPatientList(data);
        setIsLoading(false);
        setStale(false);
      });
  }, [stale]);

  const handlePatientClick = (patientId) => {
    navigate(`patients/${patientId}`);
  };

  if (isLoading === true) {
    return <div className="loading">Loading...</div>;
  }
  if (patientList.length === 0) {
    return (
      <>
        <Layout>
          <div className="pageContent">
            <div className="emptyArray">
              There are no patient records. Add your first patient.
            </div>
            <Button type="add" onClick={() => setShowModal(true)}>
              Add New Patient
            </Button>
            <PatientFormModal
              showModal={showModal}
              setShowModal={setShowModal}
              setStale={setStale}
            />
          </div>
        </Layout>
      </>
    );
  }

  return (
    <>
      <Layout>
        <div className="pageContent">
          <table>
            <tbody>
              <tr id="patientListHeader">
                <th>Last Name</th>
                <th className="secondColumn">First Name</th>
              </tr>
              {patientList.map((patient) => {
                return (
                  <tr
                    className="data-row"
                    key={patient._id}
                    onClick={() => handlePatientClick(patient._id)}
                  >
                    <td>{patient.lastName}</td>
                    <td className="secondColumn">{patient.firstName}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <Button type="add" onClick={() => setShowModal(true)}>
            Add New Patient
          </Button>

          <PatientFormModal
            showModal={showModal}
            setShowModal={setShowModal}
            setStale={setStale}
          />
        </div>
      </Layout>
    </>
  );
};
