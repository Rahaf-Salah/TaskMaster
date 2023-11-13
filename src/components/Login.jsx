import React, { useState } from "react";
import InputField from "./InputField";
import axios from "axios";
import { Button, Container, Row, Col, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Back from "./Back";
import { useDispatch } from "react-redux";
import { setUser } from "../Redux/features/User/userSlice";

const Login = () => {
  const dispatch = useDispatch();
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
          dispatch(setUser(res.data[0]));
          navigate("/todos");
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
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
