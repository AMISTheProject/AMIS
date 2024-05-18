
import React from 'react'
import { redirect } from 'react-router-dom';
import Select from 'react-select'
import Creatable from 'react-select/creatable';

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    outline: 'none',
    boxShadow: state.isFocused ? 'inset 0 0 0 1px #000' : 'none',
    backgroundColor: '#ffffff',
    height: '50px',
    borderRadius: '8px',
    borderColor: 'rgba(0, 0, 0, 0.2)',
    '&:hover': {
      borderColor: 'black',
    },
    '&:focus': {
      borderColor: 'black',
    }
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#999' : '#fff',
    color: state.isSelected ? '#fff' : '#000',
    color: state.isFocused && state.isSelected ? '#000':'fff',
    '&:hover': {
      backgroundColor: '#f0f0f0',
    }
  })
};

export const DropdownList = ({options, placeholder}) => (
  <Select styles={customStyles} options={options} placeholder={placeholder}/>
)


