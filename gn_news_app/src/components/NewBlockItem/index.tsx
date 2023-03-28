import React, {useState} from "react";
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

type NewsData = {
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
  data: NewsData;
};

const NewBlockItem: React.FC<Props> = ({ data }) => {
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
      {data.urlToImage && (
        <CardMedia
          className={classes.media}
          image={data.urlToImage}
          title={data.title}
        />
      )}
      <CardContent className={classes.content} onClick={handleClickOpen}>
        <div>
          <Typography className={classes.source} variant="body2">
            {`${data.source.name} | ${new Date(data.publishedAt).toLocaleDateString()}`}
          </Typography>
          <Typography className={classes.title} variant="h6">
            {data.title}
          </Typography>
          <Typography className={classes.description} variant="body1">
            {data.description}
          </Typography>
        </div>
      </CardContent>
    </Card>
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
    <DialogTitle>{data.title}</DialogTitle>
    <DialogContent>
      <DialogContentText>
        {data.content ? data.content : data.description}
      </DialogContentText>
      <Typography variant="subtitle1">
        {`Author: ${data.author ? data.author : "Unknown"}`}
      </Typography>
      <Link href={data.url} target="_blank">
        {data.url}
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
