import { Link } from "react-router-dom";
import "./Landing.css";

function Landing() {
  return (
    <div className="landing-container">
      <h1>Welcome to ShopEasy 🛒</h1>
      <p>Your one-stop online shopping destination</p>

      <div className="small-image-container">
        <img
          className="small-image"
          src="https://images.unsplash.com/photo-1585386959984-a41552231693?auto=format&fit=crop&w=400&q=80"
          alt="Online Shopping"
        />
      </div>
  
    </div>
  );
}

export default Landing;
