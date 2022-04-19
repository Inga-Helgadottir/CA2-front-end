import React from "react";

const WelcomePage = ({ name, role }) => {
  return (
    <div className="borderNoTop">
      <h2>
        Welcome {name}!, you are an {role} on this site
      </h2>
    </div>
  );
};

export default WelcomePage;
