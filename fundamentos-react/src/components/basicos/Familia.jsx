/* eslint-disable import/no-anonymous-default-export */
import React, { Children, cloneElement } from "react";

export default (props) => {
  return (
    <div>
      {Children.map(props.children, (child) => cloneElement(child, props))}
    </div>
  );
};
