import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-center py-3 mt-5" style={{'backgroundColor':'#1E201E'}}>
      <div className="container">
        <p className="mb-1 text-white">&copy; CAMPHUB. All rights reserved.</p>
        <small>
          <a href="#" className="text-white mr-3">Privacy Policy</a>
          <a href="#" className="text-white mr-3">Terms & Conditions</a>
          <a href="#" className="text-white">Contact</a>
        </small>
      </div> 
    </footer>
  );
};

export default Footer;
