import React from "react";
import styles from "./styles";
import { RoundedBlock } from "./RoundedBlock";
const kFormatter = num => {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
    : Math.sign(num) * Math.abs(num);
};
export const Card = ({
  picture,
  profileName,
  description,
  stars,
  issues,
  createdAt,
  repositoryName,
  backgroundColor
}) => {
  const { card, avatar, infosBlock, repoName, desc, starWarnBlock } = styles;

  const createdAt_Date = new Date(createdAt);
  const now = new Date();

  const numberOfDaysSubmition = Math.floor(
    (now - createdAt_Date) / (3600 * 24 * 1000)
  );
  return (
    <div style={{ ...card, backgroundColor: backgroundColor }}>
      <img src={picture} alt="avatar" style={avatar} />

      <div style={infosBlock}>
        <p style={repoName}>{repositoryName}</p>
        <p style={desc}>{description}</p>
        <div style={starWarnBlock}>
          <RoundedBlock count={kFormatter(stars)} type="stars" />
          <RoundedBlock count={kFormatter(issues)} type="warning" />
          <p>
            Submitted {numberOfDaysSubmition} days ago by {profileName}{" "}
          </p>
        </div>
      </div>

      <div />
    </div>
  );
};
