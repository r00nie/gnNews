import React from "react";
import { useStyles } from "./ArticlesList.styles";
import { List, Typography } from "@material-ui/core";
import NewListItem from "./NewListItem";
import { ArticlesProps } from "../../../types/globalTypes";

const ArticlesList: React.FC<ArticlesProps> = ({ articles }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.text}>List</Typography>
      <List>
        {articles.map((article) => (
          <NewListItem article={article} key={article.title} />
        ))}
      </List>
    </div>
  );
};

export default ArticlesList;
