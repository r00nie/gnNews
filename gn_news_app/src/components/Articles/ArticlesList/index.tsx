import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, Typography } from "@material-ui/core";
import NewListItem from "./NewListItem";
import { ArticlesProps } from "../../../types/globalTypes";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "95%",
    backgroundColor: theme.palette.background.paper,
    fontFamily: "Montserrat, sans-serif",
    fontSize: "1.2rem",
    color: "#333",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px auto",
    padding: "10px",
    boxSizing: "border-box",
  },
  text: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "30px",
    margin: "30px",
    textAlign: "center",
    fontWeight: "bold",
    height: "50px",
  },
}));

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
