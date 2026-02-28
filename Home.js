import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Online Shopping System</h1>

      <p>
        This is the Home page of our online shopping website.
        Here you can explore products, services, and offers.
      </p>

      <p>
        This project is built using React with simple routing and components.
      </p>

      {/* Back to Landing Page */}
      <p style={{ marginTop: "15px" }}>
        <Link to="/landing">← Back to Landing Page</Link>
      </p>
    </div>
  );
}

export default Home;
