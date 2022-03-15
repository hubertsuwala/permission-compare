import React from 'react';
import './Button.css';

const Button = (props) => (
  <button
    type="button"
    className="button"
    disabled={props.disabled}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export default Button;
