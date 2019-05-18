import React from "react";
import styles from "./styles";

export const Header = ({ children }) => {
  const { header } = styles;

  return (
    <div style={header}>
      <p>GITHUB REPOS</p>
      {children}
    </div>
  );
};
