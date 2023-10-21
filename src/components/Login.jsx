import React, { useState } from "react";
import InputField from "./InputField";
import axios from "axios";
import { Button, Container, Row, Col, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Back from "./Back";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  let navigate = useNavigate();

  const getUser = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users?email=${email}`)
      .then((res) => {
        if (res.data.length > 0) {
          //if user exists and an array with the user object is returned
          navigate(`users/${res.data[0].id}/todos`);
        } else {
          //if the returned value is an empty array so this user doesn't exist
          setError("This email doesn't exist");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container fluid>
      <Row>
        <Col s={12} md={10} lg={5} className="center">
          <div className="card">
            <Back />
            <h1 className="card-title">Login</h1>
            <InputField
              type="email"
              title="email"
              placeholder="Enter your email..."
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
              type="password"
              title="password"
              placeholder="Enter your password..."
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && (
              <Alert variant="danger" className="h-40 flexCenter">
                {error}
              </Alert>
            )}
            <Button
              variant="outline-light"
              className="mt-3 mb-5"
              onClick={getUser}
            >
              Login
            </Button>
            <div className="card-footer">
              <p>
                <Link to="/signup"> back to sign up</Link>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
