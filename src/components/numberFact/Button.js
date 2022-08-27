import React from "react";

const Button = (props) => {
  return (
    <button type={props.type} disabled={props.disabled} className={props.class}>
      {props.children}
    </button>
  );
};

export default Button;
