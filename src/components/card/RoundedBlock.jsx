import React from "react";
import star from "../../assets/star.png";
import warning from "../../assets/warning.png";

const styles = {
  roundedB: {
    borderRadius: 15,
    height: 22,
    width: 90,
    backgroundColor: "#fff",
    border: "1px solid #474343",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  warningBlock: {
    marginLeft: 5,
    marginRight: 5
  },
  numberOf: {
    color: "#6D6161",
    fontSize: 12
    // marginRight: 1
  }
};

export const RoundedBlock = ({ count, type }) => {
  const image = type === "warning" ? warning : star;
  const margin = type === "warning" ? styles.warningBlock : null;
  const imgHeight = type === "warning" ? 18 : 13;
  return (
    <div style={{ ...styles.roundedB, ...margin }}>
      <p style={styles.numberOf}>{count}</p>
      <img
        src={image}
        alt="warning"
        height={imgHeight}
        style={{ marginLeft: 5 }}
      />
    </div>
  );
};
