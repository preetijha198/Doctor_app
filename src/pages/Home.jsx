import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1>Welcome to Doctor Appointment Booking</h1>
      <Link to="/book">📅 Book an Appointment</Link>
      <br />
      <Link to="/doctor-dashboard">🩺 Doctor Dashboard</Link>
    </div>
  );
}

export default Home;
