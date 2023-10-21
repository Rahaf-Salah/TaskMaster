import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";

const Home = () => {
  return (
    <Container fluid className="landingpage">
      <Row>
        <Col sm={12} md={7}>
          <div className="landingpage-content flex-column">
            <div className="mb-10">
              <h1 className="card-title">Your Day To Day Task Manager</h1>
              <h6 className="description">
                Maintain your day-to-day tasks and list everything that you have
                to do.
                <br /> Add as many tasks as you want... <br /> Mark your tasks
                as complete when done !
              </h6>
            </div>
            <div>
              <Link
                to="/login"
                className="btn btn-primary getStarted-btn flexCenter"
              >
                Get Started <ArrowRight className="ml-3px" />
              </Link>
            </div>
          </div>
        </Col>
        <Col sm={12} md={5}>
          <img src="/images/tasks.svg" alt="landing" className="landingImg" />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
