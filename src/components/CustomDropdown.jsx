import React from "react";
import { Dropdown } from "react-bootstrap";

const CustomDropdown = ({ options, action }) => {
  return (
    <Dropdown data-bs-theme="light">
      <Dropdown.Toggle></Dropdown.Toggle>
      <Dropdown.Menu>
        {options.map((option, index) => {
          return (
            <Dropdown.Item key={index} onClick={action}>
              {option}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CustomDropdown;
