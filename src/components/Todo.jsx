import React from "react";
import { Col, ListGroup, Row, FormCheck } from "react-bootstrap";
import { Trash, PencilFill } from "react-bootstrap-icons";

const Todo = ({ todo, onDelete, onComplete, onEdit }) => {
  return (
    <ListGroup.Item as="li" style={{ padding: "15px" }}>
      <Row>
        <Col sm={9}>
          <p className="ellipsis mb-0"> {todo.title}</p>
        </Col>
        <Col sm={3}>
          <div
            className="flex-row alignCenter"
            style={{ justifyContent: "end" }}
          >
            <PencilFill
              className="table-icon mr-10"
              fill="#1ba9e2"
              width="15px"
              height="15px"
              onClick={() => onEdit(todo.id)}
            />

            <Trash
              fill="red"
              width="15px"
              height="15px"
              className="table-icon mr-10"
              onClick={() => onDelete(todo.id)}
            />
            <FormCheck
              checked={todo.isCompleted ?? false}
              onClick={() => onComplete(todo.id)}
            />
          </div>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};
export default Todo;
