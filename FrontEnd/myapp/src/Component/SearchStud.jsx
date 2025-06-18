import React from "react";
import axios from "axios";

function SearchStud() {
  const { enrollID } = useParams();
  const apiUrl = `http://localhost:5000/getStudentbyId/${enrollID}`;
  const apiUrl1 = `http://localhost:5000/updatestudent/${enrollID}`;

  return (
    <>
      <div className="container">
        <div className="row">
          {student.map((e, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card shadow d-flex flex-row align-items-center p-2">
                {/* Image on the left side */}
                <img
                  src={e.img}
                  alt="Student"
                  className="rounded"
                  style={{
                    width: "100px",
                    height: "120px",
                    objectFit: "cover",
                    marginRight: "20px",
                  }}
                />

                {/* Details on the right side */}
                <div className="flex-grow-1">
                  <h5 className="card-title">{e.studname}</h5>
                  <p className="card-text mb-1">
                    <strong>Enroll ID:</strong> {e.enrollID}
                  </p>
                  <p className="card-text mb-1">
                    <strong>Email:</strong> {e.email}
                  </p>
                  <p className="card-text mb-1">
                    <strong>Password:</strong> {e.password}
                  </p>
                  <p className="card-text mb-2">
                    <strong>Branch:</strong> {e.branch}
                  </p>

                  <div>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => navigate(`/editstudent/${e.enrollID}`)}
                    >
                      Edit
                    </button>{" "}
                    &nbsp;
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchStud;
