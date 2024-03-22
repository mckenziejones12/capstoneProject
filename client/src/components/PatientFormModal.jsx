import "./PatientFormModal.css";
import { useState } from "react";
import axios from "axios";

export const PatientFormModal = ({ showModal, setShowModal, setStale }) => {
  console.log(showModal);
  if (!showModal) return null;
  const [newPatient, setNewPatient] = useState({
    firstName: "",
    lastName: "",
    streetName: "",
    city: "",
    state: "",
    phoneNumber: "",
    d_birth: "",
  });

  const handleInput = (e) => {
    setNewPatient({ ...newPatient, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post("/api/users/patients", { ...newPatient }).then((res) => {
      console.log(res.data);
      setStale(true);
    });
    setShowModal(false);
  };

  return (
    <div className="formDisplay" style={{ marborder: "1px solid black" }}>
      <div id="closeModalBtn" onClick={() => setShowModal(false)}>
        x
      </div>
      <h3>Create New Patient</h3>
      <form action="" method="POST" onSubmit={handleSubmit}>
        <div className="inputField">
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={handleInput}
            // value={newPatient.firstName}
          />
        </div>
        <div className="inputField">
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={handleInput}
            // value={newPatient.lastName}
          />
        </div>
        <div className="inputField">
          <label htmlFor="streetName">Street Address: </label>
          <input
            type="text"
            id="streetName"
            name="streetName"
            onChange={handleInput}
            // value={newPatient.streetName}
          />
        </div>
        <div className="inputField">
          <label htmlFor="city">City: </label>
          <input
            type="text"
            id="city"
            name="city"
            onChange={handleInput}
            // value={newPatient.city}
          />
        </div>
        <div className="inputField">
          <label htmlFor="state">State: </label>
          <select id="state" name="state" onChange={handleInput}>
            <option value="AL">AL</option>
            <option value="AK">AK</option>
            <option value="AZ">AZ</option>
            <option value="AR">AR</option>
            <option value="AS">AS</option>
            <option value="CA">CA</option>
            <option value="CO">CO</option>
            <option value="CT">CT</option>
            <option value="DE">DE</option>
            <option value="DC">DC</option>
            <option value="FL">FL</option>
            <option value="GA">GA</option>
            <option value="HI">HI</option>
            <option value="ID">ID</option>
            <option value="IL">IL</option>
            <option value="IN">IN</option>
            <option value="IA">IA</option>
            <option value="KS">KS</option>
            <option value="KY">KY</option>
            <option value="LA">LA</option>
            <option value="ME">ME</option>
            <option value="MD">MD</option>
            <option value="MA">MA</option>
            <option value="MI">MI</option>
            <option value="MN">MN</option>
            <option value="MS">MS</option>
            <option value="MO">MO</option>
            <option value="MT">MT</option>
            <option value="NE">NE</option>
            <option value="NV">NV</option>
            <option value="NH">NH</option>
            <option value="NJ">NJ</option>
            <option value="NM">NM</option>
            <option value="NY">NY</option>
            <option value="NC">NC</option>
            <option value="ND">ND</option>
            <option value="OH">OH</option>
            <option value="OK">OK</option>
            <option value="OR">OR</option>
            <option value="PA">PA</option>
            <option value="RI">RI</option>
            <option value="SC">SC</option>
            <option value="TN">TN</option>
            <option value="TX">TX</option>
            <option value="UT">UT</option>
            <option value="VT">VT</option>
            <option value="VA">VA</option>
            <option value="WA">WA</option>
            <option value="WI">WI</option>
            <option value="WY">WY</option>
          </select>
        </div>
        <div className="inputField">
          <label htmlFor="phoneNumber">Phone Number: </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            onChange={handleInput}
            // value={newPatient.phoneNumber}
          />
        </div>
        <div className="inputField">
          <label htmlFor="d_birth">Date of Birth: </label>
          <input
            type="date"
            id="d_birth"
            name="d_birth"
            onChange={handleInput}
            // value={newPatient.d_birth}
          />
        </div>
        <button type="submit" value="Add Patient" id="addModalBtn">
          Add Patient
        </button>
      </form>
    </div>
  );
};
