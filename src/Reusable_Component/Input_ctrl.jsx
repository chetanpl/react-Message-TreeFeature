import React from "react";
import { Label, Input } from "reactstrap";
const Input_ctrl = ({ name, value, label, placeholder, type, onChange }) => {
    const handleChange = (e) => {
      const { name,value } = e.target;
      onChange(name,value);
    };
  
    return (
      <div className="form-group">
        {label && <Label htmlFor="input-field" className="label">{label}</Label>}
        <Input
          type={type}
          name={name}
          value={value}
          className="form-control"
          placeholder={placeholder}
          onChange={handleChange}
        />
      </div>
    );
  };
  
  export default Input_ctrl;