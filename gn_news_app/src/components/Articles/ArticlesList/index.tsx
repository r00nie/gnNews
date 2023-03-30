import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List } from "@material-ui/core";
import NewListItem from "./NewListItem";
import { ArticlesProps } from "../../../types/globalTypes";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const ArticlesList: React.FC<ArticlesProps> = ({ articles }) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {articles.map((article) => (
        <NewListItem article={article} key={article.title} />
      ))}
    </List>
  );
};

export default ArticlesList;
