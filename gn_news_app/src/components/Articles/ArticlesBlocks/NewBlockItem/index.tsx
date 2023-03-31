import React, { useState } from "react";
import { Article } from "../../../../types/globalTypes";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Link,
} from "@material-ui/core";
import { useStyles } from "./NewBlockItem.styles";

type Props = {
  article: Article;
  key: string;
};

const NewBlockItem: React.FC<Props> = ({ article }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card className={classes.root}>
        {article.urlToImage && (
          <CardMedia
            className={classes.media}
            image={article.urlToImage}
            title={article.title}
          />
        )}
        <CardContent className={classes.content} onClick={handleClickOpen}>
          <div>
            <Typography className={classes.source} variant="body2">
              {`${article.source.name} | ${new Date(
                article.publishedAt
              ).toLocaleDateString()}`}
            </Typography>
            <Typography className={classes.title} variant="h6">
              {article.title}
            </Typography>
            <Typography className={classes.description} variant="body1">
              {article.description}
            </Typography>
          </div>
        </CardContent>
      </Card>
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

export default NewBlockItem;
