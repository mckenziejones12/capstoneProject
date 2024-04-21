import { useParams } from "react-router";
import { React } from "react";
import { useState, useEffect } from "react";
import { Button } from "./Button";
import { NoteModal } from "./NoteModal";
import { UpdateNoteModal } from "./UpdateNoteModal";
import { useNavigate } from "react-router";
import updateIcon from "../images/update-icon.png";
import deleteIcon from "../images/delete-icon.png";
import { UnauthorizedModal } from "./UnauthorizedModal";
import "./PatientNotesSection.css";

export const PatientNotesSection = () => {
  const { patientId } = useParams();
  const { noteId } = useParams();

  const [singlePatient, setSinglePatient] = useState();
  const [patientNotes, setPatientNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showUnauthorizedModal, setShowUnauthorizedModal] = useState(false);
  const [currentNote, setCurrentNote] = useState();
  const [isUnauthorized, setUnauthorized] = useState(false);
  const [stale, setStale] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/users/patients/${patientId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const patientInfo = data.patient;
        const patientNotes = data.notesForPatient;
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

  const handleNoteUpdate = (note) => {
    setShowUpdateModal(true);
    setCurrentNote(note);
  };

  const handleNoteDelete = (id) => {
    console.log("delete note: ", id);
    fetch(`/api/users/patients/${patientId}/delete/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.status === 401) {
        setUnauthorized(true);
        setShowUnauthorizedModal(true);
      } else {
        setStale(true);
        setUnauthorized(false);
      }
    });
  };

  return (
    <div className="patientNotesContent">
      <table className="patientNotesTable">
        <tbody>
          <tr id="patientNotesHeader">
            <th className="firstColumn">Date</th>
            <th className="patientNotesSecondColumn">Note</th>
            <th className="edit-deleteColumn"></th>
            <th className="edit-deleteColumn"></th>
          </tr>
          {patientNotes.map((note) => {
            const noteDate = new Date(note.timestamp).toLocaleDateString();
            return (
              <tr className="noteData-row" key={note._id}>
                <td className="firstColumn">{noteDate}</td>
                <td className="patientNotesSecondColumn">{note.text}</td>
                <td className="iconCell">
                  <img
                    className="noteIcons updateNote"
                    src={updateIcon}
                    alt="edit"
                    onClick={() => handleNoteUpdate(note)}
                  />
                </td>
                <td className="iconCell">
                  <img
                    className="noteIcons deleteNote"
                    src={deleteIcon}
                    alt="delete"
                    onClick={() => handleNoteDelete(note._id)}
                  />
                </td>
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
        <UpdateNoteModal
          showUpdateModal={showUpdateModal}
          setShowUpdateModal={setShowUpdateModal}
          currentNote={currentNote}
          setStale={setStale}
        />
        {isUnauthorized && (
          <UnauthorizedModal
            showUnauthorizedModal={showUnauthorizedModal}
            setShowUnauthorizedModal={setShowUnauthorizedModal}
          />
        )}
      </div>
    </div>
  );
};
