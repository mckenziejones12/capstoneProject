import "./PatientFormModal.css";

export const PatientFormModal = ({ showModal, setShowModal }) => {
  console.log(showModal);
  if (!showModal) return null;

  return (
    <div id="addNewPatientForm" style={{ marborder: "1px solid black" }}>
      <div id="closeModalBtn" onClick={() => setShowModal(false)}>
        x
      </div>
      <h3>Create New Patient</h3>
      <form action="" method="POST">
        <tr className="inputField">
          <label htmlFor="fname">First Name: </label>
          <input type="text" id="fname" name="fname" />
        </tr>
        <tr className="inputField">
          <label htmlFor="lname">Last Name: </label>
          <input type="text" id="lname" name="lname" />
        </tr>
        <tr className="inputField">
          <label htmlFor="street">Street Address: </label>
          <input type="text" id="street" name="street" />{" "}
        </tr>
        <tr className="inputField">
          <label htmlFor="city">City: </label>
          <input type="text" id="city" name="city" />{" "}
        </tr>
        <tr className="inputField">
          <label htmlFor="state">State: </label>
          <input type="text" id="state" name="state" />{" "}
        </tr>
        <tr className="inputField">
          <label htmlFor="number">Phone Number: </label>
          <input type="text" id="number" name="number" />
        </tr>
        <tr className="inputField">
          <label htmlFor="dob">Date of Birth: </label>
          <input type="date" id="dob" name="dob" />
        </tr>
        <div id="addModalBtn" onClick={() => setShowModal(false)}>
          Add Patient
        </div>
      </form>
    </div>
  );
};
