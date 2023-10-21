import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";

const Back = () => {
  return (
    <Link to="/">
      <div className="back">
        <ArrowLeft color="white" size={15} />
        <span>Back</span>
      </div>
    </Link>
  );
};

export default Back;
