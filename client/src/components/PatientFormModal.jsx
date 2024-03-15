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
          <input type="text" id="street" name="street" />
        </tr>
        <tr className="inputField">
          <label htmlFor="city">City: </label>
          <input type="text" id="city" name="city" />
        </tr>
        <tr className="inputField">
          <label htmlFor="state">State: </label>
          <select id="states">
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
