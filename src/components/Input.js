import React from 'react';

const Input = ({ label, ...props }) => {
  return (
    <div className="container1">
      {label && <label>{label}</label>}
      <input type="text" {...props} />
    </div>

  )
}

export default Input
