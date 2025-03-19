import { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import api from "../services/api";

const localizer = momentLocalizer(moment);

function CalendarView() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    api.get("/appointments").then((res) => setAppointments(res.data));
  }, []);

  const events = appointments.map((appt) => ({
    title: appt.doctor,
    start: new Date(appt.date),
    end: new Date(appt.date),
  }));

  return (
    <div className="container">
      <h2>Appointment Calendar</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
}

export default CalendarView;
