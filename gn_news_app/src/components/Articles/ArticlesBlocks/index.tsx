import React from "react";
import { Grid, Typography } from "@material-ui/core";
import NewBlockItem from "./NewBlockItem";
import { ArticlesProps } from "../../../types/globalTypes";
import { useStyles } from "./ArticlesBlock.styles";

const ArticlesBlock: React.FC<ArticlesProps> = ({ articles }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.text}>Blocks</Typography>
      <Grid container spacing={2}>
        {articles.map((article) => (
          <NewBlockItem article={article} key={article.title} />
        ))}
      </Grid>
    </div>
  );
};

export default ArticlesBlock;
