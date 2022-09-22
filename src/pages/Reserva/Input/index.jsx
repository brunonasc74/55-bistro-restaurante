import React from 'react';
import { StyledInput } from './styles';

const Input = ({ id, type, value, error, onChange, onBlur, placeholder }) => {
  return (
    <StyledInput>
    <>
      <input
        className="input"
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {error && <p className="p">{error}</p>}
    </>
    </StyledInput>
  );
};

export default Input;