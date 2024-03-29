import React from "react";
import { useState, useEffect } from "react";
import { Button } from "./Button";
import { PatientFormModal } from "./PatientFormModal";
import { Layout } from "./Layout";
import "./Homepage.css";
import { SearchBar } from "./SearchBar";
import { PatientListTable } from "./PatientListTable";

export const Homepage = () => {
  const [patientList, setPatientList] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [showModal, setShowModal] = useState(false);
  const [stale, setStale] = useState(false);

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
          <SearchBar />
          <PatientListTable patientList={patientList} />
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
