import { useNavigate } from "react-router";
import "./PatientListTable.css";

export const PatientListTable = ({ patientList }) => {
  const navigate = useNavigate();

  const handlePatientClick = (patient) => {
    navigate(`patients/${patient._id}`);
  };

  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Last Name</th>
            <th className="patientListSecondColumn">First Name</th>
          </tr>
          {patientList.map((patient) => {
            return (
              <tr
                className="data-row"
                key={patient._id}
                onClick={() => handlePatientClick(patient)}
              >
                <td>{patient.lastName}</td>
                <td className="patientListSecondColumn">{patient.firstName}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
