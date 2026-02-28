import "./Services.css";

function Services() {
  return (
    <div className="services">
      <h1>Our Services</h1>

      <div className="services-container">
        <div className="service-card">
          <h3>Product Browsing</h3>
          <p>
            Users can explore different products with clear descriptions and images.
          </p>
        </div>

        <div className="service-card">
          <h3>User Registration</h3>
          <p>
            New users can register and create an account to access services.
          </p>
        </div>

        <div className="service-card">
          <h3>Secure Login</h3>
          <p>
            Registered users can log in safely using authentication.
          </p>
        </div>

        <div className="service-card">
          <h3>Easy Navigation</h3>
          <p>
            Simple navigation makes the website user-friendly and responsive.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
