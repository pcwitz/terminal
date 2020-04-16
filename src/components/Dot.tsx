import React from "react";

const defaultStyles = {
  display: "inline-block",
  borderRadius: "50%",
  height: 12,
  marginRight: 8,
  width: 12,
};

interface IProps {
  color?: string;
}

const Dot = ({ color }: IProps) => {
  const styles = {
    ...defaultStyles,
    backgroundColor: color ? color : "#d4d4d4",
  };
  return <span style={styles}></span>;
};

export default Dot;
