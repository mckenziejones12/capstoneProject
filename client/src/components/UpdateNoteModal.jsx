import { useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

export const UpdateNoteModal = ({
  showUpdateModal,
  setShowUpdateModal,
  setStale,
  currentNote,
}) => {
  if (!showUpdateModal) return null;
  const { patientId } = useParams();
  const [updatedNote, setUpdatedNote] = useState({
    date: new Date(currentNote.timestamp).toISOString().substring(0, 10),
    note: currentNote.text,
    patientId: patientId,
  });

  const handleInput = (e) => {
    setUpdatedNote({
      ...updatedNote,
      note: e.target.value,
    });
  };

  const handleDateChange = (e) => {
    setUpdatedNote({
      ...updatedNote,
      date: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .patch(`/api/users/patients/${patientId}/update/${currentNote._id}`, {
        ...updatedNote,
      })
      .then((res) => {
        res.data;
        setStale(true);
      });
    setShowUpdateModal(false);
  };

  return (
    <div className="formDisplay" style={{ marborder: "1px solid black" }}>
      <div id="closeModalBtn" onClick={() => setShowUpdateModal(false)}>
        x
      </div>
      <h3>Edit Note</h3>
      <form action="" method="PATCH" onSubmit={handleSubmit}>
        <div className="inputField">
          <label htmlFor="timestamp">Date: </label>
          <input
            type="date"
            id="timestamp"
            name="timestamp"
            value={updatedNote.date}
            onChange={handleDateChange}
          />
        </div>
        <div className="inputField noteInputField">
          <label htmlFor="note">Note: </label>
          <textarea
            type="text"
            id="note"
            name="note"
            value={updatedNote.note}
            onChange={handleInput}
          />
        </div>
        <button type="submit" value="Update" className="addModalBtn">
          Update
        </button>
      </form>
    </div>
  );
};
