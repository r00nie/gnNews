import React, { useState } from "react";
import { Article } from "../../../../types/globalTypes";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      margin: theme.spacing(2),
      borderRadius: theme.spacing(2),
      boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease-in-out",
      "&:hover": {
        transform: "scale(1.05)",
      },
    },
    media: {
      width: 150,
      height: 150,
      objectFit: "cover",
      borderRadius: `${theme.spacing(2)}px 0 0 ${theme.spacing(2)}px`,
    },
    content: {
      flex: "1 0 auto",
      padding: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    title: {
      fontSize: 24,
      fontWeight: 500,
      marginBottom: theme.spacing(2),
      color: theme.palette.primary.main,
    },
    source: {
      fontSize: 14,
      color: theme.palette.secondary.main,
      marginBottom: theme.spacing(1),
    },
    description: {
      fontSize: 18,
      color: theme.palette.text.secondary,
      flexGrow: 1,
    },
  })
);

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
