import React, { Children, cloneElement } from "react";

const Familia = (props) => {
  return (
    <div>
      {Children.map(props.children, (child) => cloneElement(child, props))}
    </div>
  );
};

export default Familia;
