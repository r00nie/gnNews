import React, { useState } from "react";
import { Article } from "../../../../types/globalTypes";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Link,
} from "@material-ui/core";

type Props = {
  article: Article;
  key: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "1rem",
      margin: "10px 10px",
      borderRadius: "0.5rem",
      backgroundColor: "#f7f7f7",
      border: "1px solid #e0e0e0",
      boxSizing: "border-box",
    },
  })
);

const NewsListItem: React.FC<Props> = ({ article }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formattedDate = new Date(article.publishedAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <>
      <ListItem className={classes.root} onClick={handleClickOpen}>
        {article.urlToImage && (
          <ListItemAvatar>
            <Avatar>{article.source.name.substring(0, 1)}</Avatar>
          </ListItemAvatar>
        )}
        <ListItemText
          primary={article.title}
          secondary={`${article.source.name} - ${formattedDate}`}
        />
      </ListItem>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>{article.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {article.content ? article.content : article.description}
          </DialogContentText>
          <Typography variant="subtitle1">
            {`Author: ${article.author ? article.author : "Unknown"}`}
          </Typography>
          <Link href={article.url} target="_blank">
            {article.url}
          </Link>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default NewsListItem;
