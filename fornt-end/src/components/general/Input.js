import React from 'react'
import propTypes from 'prop-types'

 const Input = (type,name,placeholder,value,onChange) => {
  return (
    <div className='from-group'>
        <input type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
        />
    </div>
  );
};

Input.propTypes={
    name: propTypes.string,
    placeholder: propTypes.string,
    value: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
}

export default Input;