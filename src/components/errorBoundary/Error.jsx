import React from "react";

const styles = {
  errorBlock: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: 300,
    textAlign: "center",
    margin: "auto"
  }
};

export const Error = () => {
  return (
    <div style={styles.errorBlock}>
      <p>
        An error has occurred, please report to us in case this message it shown
        to you.
      </p>
    </div>
  );
};
