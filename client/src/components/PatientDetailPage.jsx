import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import "./PatientDetailPage.css";

export const PatientDetailPage = () => {
  const { patientId } = useParams();
  console.log("PatientId: ", patientId);

  const [singlePatient, setSinglePatient] = useState(null);
  const [patientNotes, setPatientNotes] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/users/patients/${patientId}`)
      .then((response) => {
        console.log("Single patient: ", response);
        return response.json();
      })
      .then((data) => {
        const patientInfo = data.patient;
        const patientNotes = data.notesForPatient;
        console.log("Patient Info: ", patientInfo);
        console.log("Patient Notes: ", patientNotes);
        setSinglePatient(patientInfo);
        setPatientNotes(patientNotes);
        setIsLoading(false);
      });
  }, []);

  if (!singlePatient || isLoading) return <div>Loading...</div>;

  return (
    <div>
      <table className="personalInfo">
        <tbody>
          <tr className="fieldCategory">
            <th className="fieldTitle">First Name: </th>
            <td className="fieldIntdut">{singlePatient.firstName}</td>
          </tr>
          <tr className="fieldCategory">
            <th className="fieldTitle">Last Name: </th>
            <td className="fieldIntdut">{singlePatient.lastName}</td>
          </tr>
          <tr className="fieldCategory">
            <th className="fieldTitle">Street Name: </th>
            <td className="fieldInput">{singlePatient.streetName}</td>
          </tr>
          <tr className="fieldCategory">
            <th className="fieldTitle">City: </th>
            <td className="fieldInput">{singlePatient.city}</td>
          </tr>
          <tr className="fieldCategory">
            <th className="fieldTitle">State: </th>
            <td className="fieldInput">{singlePatient.state}</td>
          </tr>
          <tr className="fieldCategory">
            <th className="fieldTitle">Phone Number: </th>
            <td className="fieldInput">{singlePatient.phoneNumber}</td>
          </tr>
          <tr className="fieldCategory">
            <th className="fieldTitle">Date of Birth: </th>
            <td className="fieldInput">{singlePatient.d_birth}</td>
          </tr>
        </tbody>
      </table>

      <table>
        <tbody>
          <tr id="patientNotesHeader">
            <th>Date</th>
            <th className="secondColumn">Note</th>
          </tr>
          {patientNotes.map((note) => {
            const noteDate = new Date(note.timestamp).toLocaleDateString();
            return (
              <tr className="data-row" key={note._id}>
                <td>{noteDate}</td>
                <td className="secondColumn">{note.text}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
