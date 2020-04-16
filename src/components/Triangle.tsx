import React from "react";

const defaultStyles = {
  borderLeft: "6px solid transparent",
  borderRight: "6px solid transparent",
  borderBottom: "10px solid white",
  marginRight: "8px",
  height: 0,
  width: 0,
};

interface IProps {
  color?: string;
}

const Triangle = ({ color }: IProps) => {
  const styles = {
    ...defaultStyles,
  };
  return <div style={styles}></div>;
};

export default Triangle;
