import React from "react";
import { Card } from "../card/Card";

export const CardList = ({ repos }) => {
  return (
    <div style={{ transform: "translateY(70px)", zIndex: 2 }}>
      {repos.map((repo, index) => {
        if (repo) {
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
        }
      })}
    </div>
  );
};
