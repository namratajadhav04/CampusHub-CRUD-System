import React from "react";
import { Link } from "react-router-dom";
import imghome from "../Images/imghome.jpg";
import courses from "../Images/courses.png";

function Home() {
  return (
    <>
      {/* Top right buttons */}
      <div className="text-end ms-auto">
        <button className="btn  me-2">
          <Link to="/login">Login</Link>
        </button>
        &nbsp;
        <button className="btn">Enroll</button>
      </div>

      {/*Banner*/}
      <div style={{ height: "100vh", overflow: "hidden" }}>
        <img
          src={imghome}
          alt="Campus Hub Banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top", // or 'center'
          }}
        />
      </div>

      <div className="container mt-3">
        {/*Courses banner*/}
        <div>
          <img src={courses} alt="Courses" />
        </div>

        {/* Cards Row */}
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-4 mb-4">
            <div className="card" style={{ width: "100%" }}>
              <img
                src="https://i.pinimg.com/736x/3c/ef/69/3cef696aa8d7887b8c2be85ec355a408.jpg"
                className="card-img-top"
                alt="CLOUD COMPUTING"
              />
              <div className="card-body">
                <h5 className="card-title">Cloud Computing</h5>
                <p className="card-text">
                  Learn about the cloud and how to deploy applications
                  seamlessly.
                </p>
                <a href="#" className="btn btn-info">
                  Enroll Course
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4 mb-4">
            <div className="card" style={{ width: "100%" }}>
              <img
                src="https://i.pinimg.com/736x/39/5a/9a/395a9a9aec7089444383b2506114bd6d.jpg"
                className="card-img-top"
                alt="AI"
              />
              <div className="card-body">
                <h5 className="card-title">Artificial Intelligence</h5>
                <p className="card-text">
                  Explore the world of AI and machine learning with hands-on
                  projects.
                </p>
                <a href="#" className="btn btn-info">
                  Enroll Course
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4 mb-4">
            <div className="card" style={{ width: "100%" }}>
              <img
                src="https://i.pinimg.com/736x/96/c3/ae/96c3aed8b633f01db67aa86bc36fb7a9.jpg  "
                className="card-img-top"
                alt="Cybersecurity"
              />
              <div className="card-body">
                <h5 className="card-title">Cybersecurity</h5>
                <p className="card-text">
                  Understand threats and build secure systems to protect data.
                </p>
                <a href="#" className="btn btn-info">
                  Enroll Course
                </a>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-4 mb-4">
            <div className="card" style={{ width: "100%" }}>
              <img
                src="https://i.pinimg.com/736x/48/20/aa/4820aa6e1b1312392065066936762e69.jpg"
                className="card-img-top"
                alt="datascience"
              />
              <div className="card-body">
                <h5 className="card-title">Data Science</h5>
                <p className="card-text">
                  Understand threats and build secure systems to protect data.
                </p>
                <a href="#" className="btn btn-info">
                  Enroll Course
                </a>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="col-md-4 mb-4">
            <div className="card" style={{ width: "100%" }}>
              <img
                src="https://i.pinimg.com/736x/7d/c2/cc/7dc2ccabc6b561441ed918937c22dac4.jpg"
                className="card-img-top"
                alt="machinelearning"
              />
              <div className="card-body">
                <h5 className="card-title"> Machine Learning</h5>
                <p className="card-text">
                  Understand threats and build secure systems to protect data.
                </p>
                <a href="#" className="btn btn-info">
                  Enroll Course
                </a>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="col-md-4 mb-4">
            <div className="card" style={{ width: "100%" }}>
              <img
                src="https://i.pinimg.com/736x/05/02/eb/0502eb214f59254a90ab6283e53168df.jpg"
                className="card-img-top"
                alt="Webdev"
              />
              <div className="card-body">
                <h5 className="card-title">Web Development</h5>
                <p className="card-text">
                  Explore the world of AI and machine learning with hands-on
                  projects.
                </p>
                <a href="#" className="btn btn-info">
                  Enroll Course
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
