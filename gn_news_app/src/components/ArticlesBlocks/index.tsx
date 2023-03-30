import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import NewBlockItem from "../NewBlockItem";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
  })
);

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

const ArticlesBlock: React.FC<Props> = ({ articles }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {articles.map((article) => (
            <NewBlockItem data={article} key={article.title}/>
        ))}
      </Grid>
    </div>
  );
};

export default ArticlesBlock;
