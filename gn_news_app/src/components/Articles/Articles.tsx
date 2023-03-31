import React, { FC } from "react";
import ArticlesList from "./ArticlesList";
import ArticlesBlocks from "./ArticlesBlocks";
import { AppState, ArticlesProps } from "../../types/globalTypes";
import { useSelector } from "react-redux";

const Articles: FC<ArticlesProps> = ({ articles }) => {
  const isList = useSelector((state: AppState) => state.listVisibility);

  return (
    <>
      {isList ? (
        <ArticlesList articles={articles} />
      ) : (
        <ArticlesBlocks articles={articles} />
      )}
    </>
  );
};

export default Articles;
