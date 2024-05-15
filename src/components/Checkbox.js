import '../assets/style/styles.css';
import React, { useState } from 'react';

export const Checkbox = ({value, onChange}) => {
  const [isChecked, setIsChecked] = useState(value);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
  };

  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={toggleCheckbox}
      />
      <span className="checkmark"></span>
    </label>
  );
}
