import React from "react";
import styles from "./styles";
import { Card } from "../card/Card";

export const CardList = ({ repos }) => {
  console.log(repos);
  return (
    <div>
      {repos.map((repo, index) => {
        const {
          owner,
          description,
          stargazers_count,
          open_issues_count,
          created_at,
          full_name
        } = repo;

        var bgColor = index % 2 ? "#F8F8F8" : "#fff";
        return (
          <Card
            key={index}
            picture={owner.avatar_url}
            profileName={owner.login}
            description={description}
            stars={stargazers_count}
            issues={open_issues_count}
            createdAt={created_at}
            repositoryName={full_name}
            backgroundColor={bgColor}
          />
        );
      })}
    </div>
  );
};
