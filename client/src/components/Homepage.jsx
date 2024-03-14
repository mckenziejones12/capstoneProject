import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { NavBar } from "./NavBar";
import { Button } from "./Button";
import { Footer } from "./Footer";
import "./Homepage.css";

export const Homepage = () => {
  const [patientList, setPatientList] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/users/patients")
      .then((response) => {
        console.log("Patient List: ", response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPatientList(data);
        setIsLoading(false);
      });
  }, []);

  const handlePatientClick = (patientId) => {
    navigate(`patients/${patientId}`);
  };

  return (
    <div id="pageContent">
      <NavBar />

      <table>
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
      </table>
      <Button type="add">Add New Patient</Button>
      <Footer />
    </div>
  );
};
