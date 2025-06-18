import React from 'react'

function About() {
  return (
    <>
    <div className='container  mt-5' style={{'backgroundColor':'#697565'}}>
        <ul><br></br><br></br>
          <h3>🧾 About CampusHub</h3>
          <p>CampusHub is a student-centric platform designed to streamline and 
            enhance campus life through a centralized digital ecosystem. Whether 
            it's managing student records, facilitating communication, or hosting 
            campus-wide services, CampusHub brings everything under one roof, making 
            it easier for students and administrators to stay connected.</p>
          <br></br>
        </ul>

        <ul>
          <h3>🔧 What is CampusHub?</h3>
          <p>CampusHub offers a modern solution for educational institutions, allowing users to:</p>
          <li>Register students and manage their profiles</li>
          <li>Handle academic data such as enrollment, branch, age, and more</li>
          <li>Maintain up-to-date contact information including email and mobile numbers</li>
          <li>Ensure secure access through authentication and password management</li>
          <li>Create a smooth, user-friendly registration and management experience</li><br></br>
          <p>The system is scalable and can be extended to handle events, notices, placements, and 
            more — making it the go-to platform for any college or university.</p>
        </ul>
        <hr></hr>
        <ul>
          <h3>🛠️ Tech Stack Used:</h3>
          <li>Frontend: React.js</li>
          <li>Backend: Node.js, Express.js</li>
          <li>Database: MongoDB (with Mongoose)</li>
          <li>Authentication: JWT (Optional if added)</li>
        </ul>
        <br></br><br></br>
        <ul>
          <h3>💡 Vision Behind CampusHub</h3>
          <p>CampusHub is built with the goal of digitizing campus 
            operations while keeping the interface intuitive for students 
            and faculty alike. It reflects the developer's capability to 
            deliver a complete full-stack solution, tailored for real-world 
            academic workflows. From registration to data management, CampusHub 
            aims to make campus life more organized, efficient, and tech-driven</p>
        </ul><br></br><br></br>
    </div>
    
    
    </>
  )
}

export default About