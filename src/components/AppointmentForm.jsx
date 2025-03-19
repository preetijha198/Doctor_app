import { useState } from "react";
import api from "../services/api";

function AppointmentForm({ selectedDoctor }) {
  const [date, setDate] = useState("");

  const handleBooking = () => {
    if (!selectedDoctor) {
      alert("Please select a doctor first!");
      return;
    }
    api.post("/appointments", { doctor: selectedDoctor.name, date }).then(() =>
      alert("Appointment Booked!")
    );
  };

  return (
    <div className="container">
      <h2>Book an Appointment</h2>
      {selectedDoctor ? (
        <>
          <p>Doctor: {selectedDoctor.name} - {selectedDoctor.speciality}</p>
          <input type="date" onChange={(e) => setDate(e.target.value)} />
          <button onClick={handleBooking}>Book Appointment</button>
        </>
      ) : (
        <p>Please select a doctor first.</p>
      )}
    </div>
  );
}

export default AppointmentForm;
