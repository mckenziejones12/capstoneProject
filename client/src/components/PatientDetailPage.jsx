import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

export const PatientDetailPage = () => {
  const { patientId } = useParams();
  console.log("PatientId: ", patientId);

  const [singlePatient, setSinglePatient] = useState(null);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/users/patients/${patientId}`)
      .then((response) => {
        console.log("Single patient: ", response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setSinglePatient(data);
        setIsLoading(false);
      });
  }, []);

  if (!singlePatient || isLoading) return <div>Loading...</div>;

  return (
    <div>
      <p>{singlePatient.firstName}</p>
    </div>
  );
};
