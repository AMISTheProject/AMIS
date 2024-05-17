/*import Form from 'react-bootstrap/Form';


export const DropdownList =() => { {
  return (
    <Form.Select className="dropdown-login" aria-label="role">
      <option className="dropdown-login" value="plant-man">Project Manager</option>
      <option value="plant-enj">Plant Engineer</option>
      <option value="fin-dept">Finance Department</option>
      <option value="cil">Continuous Improvement Lead</option>
      <option value="bso">Business Services Organization</option>
    </Form.Select>
  );
}
}*/
import React from 'react'
import { redirect } from 'react-router-dom';
import Select from 'react-select'
import Creatable from 'react-select/creatable';

const options = [
  { value: 'plant-manager', label: 'Plant Manager' },
  {value:'plant-engineer',label:'Plant Engineer'},
  { value: 'finance-department', label: 'Finance Department' },
  { value: 'continuous-improvement-lead', label: 'Continuous Improvement Lead' },
  { value: 'business-services-organization', label: 'Business Services Organization' }
]

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    boxShadow:'none', //removes the stupid blue shit
    backgroundColor: '#ffffff',
    borderColor: '#ccc',
    '&:hover': {
      borderColor: '#red',
      borderColor: state.isSelected? 'black': 'red',
      outline: 'none',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#999' : '#fff',
    color: state.isSelected ? '#fff' : '#000',
    '&:hover': {
      backgroundColor: '#f0f0f0',

    }
  })
};

export const DropdownList = () => (
  <Select styles={customStyles} options={options} placeholder='Select role'/>
)


