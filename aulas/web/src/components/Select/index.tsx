import React, { SelectHTMLAttributes } from "react";

import "./styles.css";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const Select: React.FC<SelectProps> = ({ options, name, label, ...rest }) => {
  return (
    <div className="select-block">
      <label htmlFor={name}> {label}</label>
      <select value="" {...rest} id={name}>
        <option value="" disabled selected hidden>
          {" "}
          Selecione uma opção{" "}
        </option>

        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
