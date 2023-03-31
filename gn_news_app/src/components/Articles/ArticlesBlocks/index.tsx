import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import NewBlockItem from "./NewBlockItem";
import { ArticlesProps } from "../../../types/globalTypes";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
      width: "95%",
      backgroundColor: theme.palette.background.paper,
      fontFamily: "Montserrat, sans-serif",
      fontSize: "1.2rem",
      color: "#333",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "20px auto",
      boxSizing: "border-box",
      borderRadius: "0.5rem",
    },
    text: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: "30px",
      margin: "30px",
      textAlign: "center",
      fontWeight: "bold",
      height: "50px",
    },
  })
);

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
