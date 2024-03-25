import { useParams } from "react-router";
import { useState, useEffect } from "react";
import "./PersonalInfoSection.css";

export const PersonalInfoSection = () => {
  const { patientId } = useParams();
  const [singlePatient, setSinglePatient] = useState(null);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/users/patients/${patientId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const patientInfo = data.patient;
        setSinglePatient(patientInfo);
        setIsLoading(false);
      });
  }, []);

  if (!singlePatient || isLoading) return <div>Loading...</div>;

  return (
    <>
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
    </>
  );
};
