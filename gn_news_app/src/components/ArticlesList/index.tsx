import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List } from "@material-ui/core";
import NewListItem from '../NewListItem';

interface Article {
  source: {
      id: string | null;
      name: string;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
};

interface Props {
  articles: Article[];
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const ArticlesList: React.FC<Props> = ({ articles }) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {articles.map((article) => (
        <NewListItem data={article} key={article.title} />
      ))}
    </List>
  );
};

export default ArticlesList;
