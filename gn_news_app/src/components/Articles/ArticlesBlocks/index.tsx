import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import NewBlockItem from "./NewBlockItem";
import { ArticlesProps } from "../../../types/globalTypes";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
  })
);

const ArticlesBlock: React.FC<ArticlesProps> = ({ articles }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {articles.map((article) => (
          <NewBlockItem article={article} key={article.title} />
        ))}
      </Grid>
    </div>
  );
};

export default ArticlesBlock;
