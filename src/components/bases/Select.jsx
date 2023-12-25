import React, { useState, useEffect } from 'react';

export const Select = ({ name, label, options, selectedOption, onChange }) => {

  const [selected, setSelected] = useState(selectedOption ? selectedOption : '');

	useEffect(() => {
		setSelected(selectedOption ? selectedOption : '');
	}, [selectedOption]);

  const handleSelectChange = (event) => {
    const option = event.target.value;
    setSelected(option);
    onChange(option);
  };

  return (
    <div className='form-floating'>
      <select name={name} className='form-select' value={selected} onChange={handleSelectChange} required>
        <option key='' value=''>Seleccionar</option>
        {
          Object.keys(options).map((optionGroupName) => (
            <optgroup key={optionGroupName} label={optionGroupName}>
              {
                options[optionGroupName].map(({ code, name }) => (
                  <option key={code} value={code}>{name} ({code})</option>
                ))
              }
            </optgroup>
          ))
        }
      </select>
      <label htmlFor={name}>{label}</label>
    </div>
  );
}