import React from "react";

const Title = ({ className, ...props }) => (
  <h2 className={`title ${className}`} {...props} />
);

export default Title;
