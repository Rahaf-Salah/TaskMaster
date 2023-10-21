import React from "react";

const InputField = ({ value, onChange, label, placeholder, type, title }) => {
  return (
    <div className="flex-column">
      <label className="field-label mb-10">{label}</label>
      <input
        className="inputField mb-20 h-40"
        type={type}
        title={title}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
