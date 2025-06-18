import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mt-3">
      {/* Top right buttons */}
      <div className="text-end mb-4">
        <button className="btn  me-2">
          <Link to="/login">Login</Link>
        </button>
        &nbsp;
        <button className="btn">Enroll</button>
      </div>

      {/* Cards Row */}
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4 mb-4">
          <div className="card" style={{ width: "100%" }}>
            <img
              src="https://i.pinimg.com/736x/6b/ed/2c/6bed2c1e03b823b55f6491defdf8db3c.jpg"
              className="card-img-top"
              alt="CLOUD COMPUTING"
            />
            <div className="card-body">
              <h5 className="card-title">Cloud Computing</h5>
              <p className="card-text">
                Learn about the cloud and how to deploy applications seamlessly.
              </p>
              <a href="#" className="btn btn-primary">
                Enroll Course
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 mb-4">
          <div className="card" style={{ width: "100%" }}>
            <img
              src="https://i.pinimg.com/736x/c6/38/53/c63853431c87bb946472b1b3b9494639.jpg"
              className="card-img-top"
              alt="AI"
            />
            <div className="card-body">
              <h5 className="card-title">Artificial Intelligence</h5>
              <p className="card-text">
                Explore the world of AI and machine learning with hands-on
                projects.
              </p>
              <a href="#" className="btn btn-primary">
                Enroll Course
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 mb-4">
          <div className="card" style={{ width: "100%" }}>
            <img
              src="https://i.pinimg.com/736x/f9/0f/6d/f90f6da1a27b005d2136e9592c30a49c.jpg"
              className="card-img-top"
              alt="Cybersecurity"
            />
            <div className="card-body">
              <h5 className="card-title">Cybersecurity</h5>
              <p className="card-text">
                Understand threats and build secure systems to protect data.
              </p>
              <a href="#" className="btn btn-primary">
                Enroll Course
              </a>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-4 mb-4">
          <div className="card" style={{ width: "100%" }}>
            <img
              src="https://i.pinimg.com/736x/0b/57/a1/0b57a1fd5fc21d4de422248caf72ccfe.jpg"
              className="card-img-top"
              alt="datascience"
            />
            <div className="card-body">
              <h5 className="card-title">Data Science</h5>
              <p className="card-text">
                Understand threats and build secure systems to protect data.
              </p>
              <a href="#" className="btn btn-primary">
                Enroll Course
              </a>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="col-md-4 mb-4">
          <div className="card" style={{ width: "100%" }}>
            <img
              src="https://i.pinimg.com/736x/c0/3d/63/c03d63e74307b2a098b35254d3d09383.jpg"
              className="card-img-top"
              alt="machinelearning"
            />
            <div className="card-body">
              <h5 className="card-title"> Machine Learning</h5>
              <p className="card-text">
                Understand threats and build secure systems to protect data.
              </p>
              <a href="#" className="btn btn-primary">
                Enroll Course
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
