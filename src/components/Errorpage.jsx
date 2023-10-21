import React from "react";
import { Container } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

//if the user typed wrong path in URL
const Errorpage = () => {
  return (
    <Container fluid className="flex-column alignCenter errorPage">
      <img src="/images/notfound.svg" alt="error404" className="mb-30" />
      <h1 className="mb-10">Oops !</h1>
      <h4 className="mb-30">Page Not Found</h4>
      <Link to="/" className="btn btn-primary getStarted-btn flexCenter">
        <ArrowLeft className="mr-3px" /> Go to home page
      </Link>
    </Container>
  );
};

export default Errorpage;
