import { useEffect, useState } from "react";
import React from "react";
import "./PatientList.css";

const PatientList = () => {
  const [patientList, setPatientList] = useState([]);
  const [isLoading, setIsLoading] = useState();

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

  return (
    <table>
      <tr id="patientListHeader">
        <th>Last Name</th>
        <th className="secondColumn">First Name</th>
      </tr>
      {patientList.map((patient) => {
        return (
          <tr key={patient._id}>
            <td>{patient.lastName}</td>
            <td className="secondColumn">{patient.firstName}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default PatientList;
