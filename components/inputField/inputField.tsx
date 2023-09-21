import React from "react";
const InputField = ({
  value,
  label,
  name,
  placeholder,
  type,
  onChange,
  className,
}: any) => (
  <div className="form-group">
    {label ? (
      <div>
        <label htmlFor="input-field">{label}</label>
      </div>
    ) : null}
    <input
      type={type}
      value={value}
      name={name}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);
export default InputField;
