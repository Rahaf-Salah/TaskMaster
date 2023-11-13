import React, { useEffect, useState } from "react";
import { Container, Alert, ListGroup, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "axios";
import Todo from "./Todo";
import { Navigate } from "react-router-dom";
import cuid from "cuid";
import EditTodo from "./EditTodo";

const Todos = () => {
  const user = useSelector((state) => state.user);
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");
  const [newTodo, setNewTodo] = useState("");
  const [tab, setTab] = useState("all");
  const [editableTodoId, setEditableTodoId] = useState(undefined);

  useEffect(() => {
    if (!user.isLoggedin) {
      return;
    }

    axios
      .get(`https://jsonplaceholder.typicode.com/users/${user.id}/todos`)
      .then((res) => {
        if (res.data.length > 0) {
          setTodos(res.data);
        } else {
          setError("Couldn't fetch the todos for this user");
        }
      })
      .catch((err) => console.log(err));
  }, [user]);

  if (!user.isLoggedin) {
    //navigate component will navigate without interacting not like usenavigat hook in login
    return <Navigate to="/login" replace />;
  }

  const deleteTodo = (id) =>
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));

  const completeTodo = (id) =>
    setTodos((currentTodos) =>
      currentTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      })
    );
  const editTodoTitle = (newTitle) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) => {
        if (todo.id === editableTodoId) {
          return {
            ...todo,
            title: newTitle,
          };
        }
        return todo;
      })
    );
  };

  const editTodo = (id) => {
    setEditableTodoId(id);
  };

  const getTodos = () => {
    switch (tab) {
      case "all": {
        return todos;
      }

      case "completed": {
        return todos.filter((todo) => todo.isCompleted);
      }

      default: {
        return todos.filter((todo) => !todo.isCompleted);
      }
    }
  };

  const editableTodo = todos.find((todo) => todo.id === editableTodoId);

  return (
    <Container fluid className="background-white">
      {!!editableTodoId && (
        <EditTodo
          todoText={editableTodo?.title}
          showPopup={!!editableTodo}
          onClose={() => setEditableTodoId(undefined)}
          onSave={editTodoTitle}
        />
      )}
      <Row>
        <Col sm={12} md={9} lg={6} className="center">
          <div className="tasks-container mt-5 mb-5">
            <h2 className="todo-title-blue">TODO List</h2>
            <div className="tasks-container mb-10">
              <div className="flexCenter flex-column">
                <input
                  className="newTask-input"
                  type="text"
                  placeholder="What would you like to do?"
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                />
                <Button
                  variant="outline-info"
                  className="task-btn mt-15"
                  onClick={() => {
                    setTodos((oldTodos) => [
                      {
                        id: cuid(),
                        title: newTodo,
                      },
                      ...oldTodos,
                    ]);
                    setNewTodo("");
                  }}
                >
                  Add
                </Button>
              </div>
            </div>
            <div>
              <div className="flex-row mt-4 mb-10">
                <Button
                  variant="outline-info"
                  className={`task-btn mr-10 ${tab === "all" ? "active" : ""}`}
                  onClick={() => setTab("all")}
                >
                  All Todos
                </Button>
                <Button
                  variant="outline-info"
                  className={`task-btn mr-10 ${
                    tab === "completed" ? "active" : ""
                  }`}
                  onClick={() => setTab("completed")}
                >
                  Completed Todos
                </Button>
                <Button
                  variant="outline-info"
                  className={`task-btn ${
                    tab === "notCompleted" ? "active" : ""
                  }`}
                  onClick={() => setTab("notCompleted")}
                >
                  Not Completed Todos
                </Button>
              </div>
              <ListGroup>
                {getTodos().map((todo, index) => {
                  return (
                    <Todo
                      key={index}
                      todo={todo}
                      onDelete={deleteTodo}
                      onComplete={completeTodo}
                      onEdit={editTodo}
                    />
                  );
                })}
              </ListGroup>
            </div>
          </div>
          {error && (
            <Alert variant="danger" className="h-40 flexCenter">
              {error}
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Todos;
