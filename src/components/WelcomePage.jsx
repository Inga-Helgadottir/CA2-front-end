import React from "react";

const WelcomePage = ({ name, role }) => {
  return (
    <div className="borderNoTop">
      <h2>Welcome {name} !</h2>
      <h3>Your role on this site is {role}</h3>
      <p>
        REMEMBER to add initial instructions on how to use the Quick Start
        Project.
      </p>
    </div>
  );
};

export default WelcomePage;
