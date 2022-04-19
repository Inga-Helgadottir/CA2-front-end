import React from "react";

const WelcomePage = ({ name, role }) => {
  return (
    <div className="borderNoTop">
      <h2>
        Welcome {name}!, your role on this site is {role}
      </h2>
    </div>
  );
};

export default WelcomePage;
