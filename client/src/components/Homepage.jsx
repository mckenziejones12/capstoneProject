import React from "react";
import { useState, useEffect } from "react";
import { Button } from "./Button";
import { PatientFormModal } from "./PatientFormModal";
import { Layout } from "./Layout";
import "./Homepage.css";
import { SearchBar } from "./SearchBar";
import { PatientListTable } from "./PatientListTable";
import { useNavigate } from "react-router";

export const Homepage = () => {
  const [userList, setUserList] = useState();
  const [patientList, setPatientList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [showModal, setShowModal] = useState(false);
  const [stale, setStale] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/users/patients")
      .then((response) => {
        if (!response.ok) {
          navigate("/login");
        }
        return response.json();
      })
      .then((data) => {
        console.log("result:", data);
        setPatientList(data.allPatients);
        console.log("data.allPatients: ", data.allPatients);
        setFilteredList(data.allPatients);
        setUserList(data.allUsers);
        console.log("data.allUsers: ", data.allUsers);
        setIsLoading(false);
        setStale(false);
      });
  }, [stale]);

  const addPatientIfAuthorized = () => {
    // If authorized (admin===true), setShowModal(true)
    // If not authorized (admin===false), alert "Not authorized"
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

  const handleSearch = (searchTerm) => {
    const lowerCaseSearch = searchTerm.toLowerCase();
    if (lowerCaseSearch === "") {
      setFilteredList(patientList);
    }
    setFilteredList(
      patientList.filter((patient) =>
        patient.lastName.toLowerCase().startsWith(lowerCaseSearch)
      )
    );
  };

  return (
    <>
      <Layout>
        <div className="pageContent">
          <SearchBar onSearch={handleSearch} />
          <PatientListTable patientList={filteredList} />
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
