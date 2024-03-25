import "./NoteModal.css";
import { useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

export const NoteModal = ({ showModal, setShowModal, setStale }) => {
  if (!showModal) return null;
  const { patientId } = useParams();
  console.log("Patient Id in NoteModal: ", patientId);
  const [newNote, setNewNote] = useState({
    timestamp: new Date().toLocaleDateString(),
    note: "",
    patientId: patientId,
  });

  const handleInput = (e) => {
    setNewNote({ ...newNote, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post(`/api/users/patients/${patientId}/note`, { ...newNote })
      .then((res) => {
        setStale(true);
      });
    setShowModal(false);
  };

  return (
    <div className="formDisplay" style={{ marborder: "1px solid black" }}>
      <div id="closeModalBtn" onClick={() => setShowModal(false)}>
        x
      </div>
      <h3>Create New Note</h3>
      <form action="" method="POST" onSubmit={handleSubmit}>
        <div className="inputField">
          <label htmlFor="timestamp">Date: </label>
          <input
            type="date"
            id="timestamp"
            name="timestamp"
            onChange={handleInput}
          />
        </div>
        <div className="inputField noteInputField">
          <label htmlFor="note">Note: </label>
          <textarea type="text" id="note" name="note" onChange={handleInput} />
        </div>
        <button type="submit" value="Add Note" className="addModalBtn">
          Add Note
        </button>
      </form>
    </div>
  );
};
