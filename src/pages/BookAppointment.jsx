import { useState, useEffect } from "react";
import api from "../services/api";

function BookAppointment() {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [date, setDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    api.get("/doctors").then((res) => setDoctors(res.data));
  }, []);

  const handleBooking = () => {
    if (!selectedDoctor || !date) {
      alert("Please select a doctor and a date!");
      return;
    }

    setIsLoading(true);
    api.post("/appointments", { doctor: selectedDoctor, date })
      .then(() => {
        alert("Appointment successfully booked!");
        setSelectedDoctor("");
        setDate("");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="container">
      <h1>Book an Appointment</h1>
      
      <label>Select Doctor:</label>
      <select value={selectedDoctor} onChange={(e) => setSelectedDoctor(e.target.value)}>
        <option value="">Select a doctor</option>
        {doctors.map((doc) => (
          <option key={doc.id} value={doc.name}>
            {doc.name} - {doc.speciality}
          </option>
        ))}
      </select>

      <label>Select Date:</label>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

      <button onClick={handleBooking} disabled={isLoading || !selectedDoctor || !date}>
        {isLoading ? "Booking..." : "Book Appointment"}
      </button>

      {selectedDoctor && <p>Selected Doctor: {selectedDoctor}</p>}
    </div>
  );
}

export default BookAppointment;
