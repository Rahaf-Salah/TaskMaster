import React, { useState } from "react";
import { Button } from "react-bootstrap";

const EditTodo = ({ todoText, showPopup, onClose, onSave }) => {
  const [currentValue, setCurrentValue] = useState(todoText);

  return (
    <div className={`overlay ${showPopup ? "show" : "hide"}`}>
      <div className="popup tasks-container">
        <h4 className="todo-title-blue">Edit todo</h4>
        <div className="mt-1">
          <textarea
            value={currentValue}
            onChange={(e) => setCurrentValue(e.target.value)}
          />
        </div>
        <div className="popup-btnGroup">
          <Button
            variant="outline-danger"
            className="task-btn mr-10"
            onClick={() => onClose()}
          >
            Cancel
          </Button>
          <Button
            variant="outline-info"
            className="task-btn"
            onClick={() => {
              onSave(currentValue);
              onClose();
            }}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditTodo;
