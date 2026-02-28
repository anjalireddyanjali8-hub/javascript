import "./About.css";

function About() {
  return (
    <>
      <div className="about">
        <h1>About Our Shopping Website</h1>

        <img
  src="https://s3-alpha.figma.com/hub/file/5400506981/19d6893b-c08a-4498-8689-a64cc0b95b23-cover.png"
  alt="Online Shopping"
  className="about-img"/>

        <p>
          This online shopping website is developed as an academic project using
          React. It helps students understand how e-commerce applications are
          designed and structured.
        </p>

        <p>
          The website allows users to explore products and learn how an online
          shopping system works with a simple and user-friendly interface.
        </p>

        <p>
          This project focuses on modern web development concepts such as
          component-based design and reusable code.
        </p>

        <p>
          In the future, features like user authentication, shopping cart, and
          online payment can be added.
        </p>
      </div>
    </>
  );
}

export default About;


