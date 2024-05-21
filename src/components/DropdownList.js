import React, { useState } from 'react';
import Select from 'react-select';
// import 'bootstrap/dist/css/bootstrap.min.css';

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    outline: 'none',
    boxShadow: state.isFocused ? '0 0 0 1px rgba(255, 0, 0, 0.2)' : 'none',
    backgroundColor: '#ffffff',
    height: '50px',
    borderRadius: '8px',
    borderColor: state.isFocused ? '#EB3131' : 'rgba(0, 0, 0, 0.2)',
    '&:hover': {
      borderColor: '#EB3131'
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? 'rgba(255, 0, 0, 0.2)' : '#fff',
    color: state.isSelected ? '#fff' : '#000',
    color: state.isFocused && state.isSelected ? '#000':'fff',
    '&:hover': {
      backgroundColor: '#f0f0f0',
    }
  })
};

export const DropdownList = ({options, placeholder, startValue, onChange}) => {
  const [value, setValue] = useState(startValue);

  function triggerChange(newVal) {
    setValue(newVal);
    onChange(newVal);
  }

  return (
    <Select styles={customStyles} options={options} placeholder={placeholder} value={value} onChange={(selectedOption) => triggerChange(selectedOption)}/>
  );
}


