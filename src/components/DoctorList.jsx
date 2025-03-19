import { useEffect, useState } from "react";
import api from "../services/api";

function DoctorList({ onSelectDoctor }) {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    api.get("/doctors").then((res) => setDoctors(res.data));
  }, []);

  return (
    <div className="container">
      <h2>Available Doctors</h2>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.id} onClick={() => onSelectDoctor(doctor)}>
            {doctor.name} - {doctor.speciality}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DoctorList;
