import React from "react";

const defaultStyles = {
  marginRight: "8px",
};

const Tilde = () => {
  const styles = {
    ...defaultStyles,
  };
  return <div style={styles}>~</div>;
};

export default Tilde;
