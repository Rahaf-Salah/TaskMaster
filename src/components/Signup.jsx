import React, { useState } from "react";
import axios from "axios";
import InputField from "./InputField";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Back from "./Back";

//note: this is a dummy sign up component, no user is added to json placeholder API
//you can only login with one of the 10 user emails' provided by json placeholder API's documentatoin

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");

  const url = "https://jsonplaceholder.typicode.com/users";
  const addUser = () => {
    if (!username || !email || !password) {
      setError("All fields are required");
      return;
    }

    setDisabled(true);
    axios
      .post(url, {
        username: username,
        email: email,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))
      .finally(() => {
        setDisabled(false);
        setError("");
      });
  };

  return (
    <Container fluid>
      <Row>
        <Col s={12} md={10} lg={5} className="center">
          <div className="card">
            <Back />
            <h1 className="card-title">Sign up</h1>
            <InputField
              type="text"
              title="username"
              placeholder="Enter your username..."
              label="Username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <InputField
              type="email"
              title="email"
              placeholder="Enter your email..."
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <InputField
              type="password"
              title="password"
              placeholder="Enter your password..."
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {error && (
              <Alert variant="danger" className="h-40 flexCenter">
                {error}
              </Alert>
            )}
            <Button
              disabled={disabled}
              variant="outline-light"
              className="mb-5 mt-3"
              onClick={addUser}
            >
              Sign up
            </Button>
            <div className="card-footer">
              <p>
                already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
