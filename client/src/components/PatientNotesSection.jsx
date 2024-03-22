import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Button } from "./Button";
import { NoteModal } from "./NoteModal";
import "./PatientNotesSection.css";

export const PatientNotesSection = () => {
  const { patientId } = useParams();
  console.log("PatientId: ", patientId);

  const [singlePatient, setSinglePatient] = useState();
  const [patientNotes, setPatientNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [stale, setStale] = useState(false);

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
        console.log("Patient Information: ", patientInfo);
        console.log("Patient Notes: ", patientNotes);
        setSinglePatient(patientInfo);
        setPatientNotes(patientNotes);
        setIsLoading(false);
        setStale(false);
      });
  }, [stale]);

  // Check that the data is loaded
  if (isLoading || !singlePatient) return <div>Loading...</div>;

  if (patientNotes.length === 0) {
    return (
      <div className="patientNotesContent">
        <div className="emptyArray">
          {singlePatient.firstName} {singlePatient.lastName} does not have any
          notes documented. Create a new note.
        </div>
        <div className="createNoteButtonDiv">
          <Button type="add" onClick={() => setShowModal(true)}>
            Create New Note
          </Button>
          <NoteModal
            showModal={showModal}
            setShowModal={setShowModal}
            setStale={setStale}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="patientNotesContent">
      <table className="patientNotesTable">
        <tbody>
          <tr id="patientNotesHeader">
            <th className="firstColumn">Date</th>
            <th className="secondColumn">Note</th>
          </tr>
          {patientNotes.map((note) => {
            const noteDate = new Date(note.timestamp).toLocaleDateString();
            return (
              <tr className="data-row" key={note._id}>
                <td className="firstColumn">{noteDate}</td>
                <td className="secondColumn">{note.text}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="createNoteButtonDiv">
        <Button type="add" onClick={() => setShowModal(true)}>
          Create New Note
        </Button>
        <NoteModal
          showModal={showModal}
          setShowModal={setShowModal}
          setStale={setStale}
        />
      </div>
    </div>
  );
};
