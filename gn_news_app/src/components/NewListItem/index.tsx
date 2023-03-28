import React, {useState} from "react";
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

type Props = {
  data: NewsData;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      marginBottom: theme.spacing(1),
    },
  })
);

const NewsListItem: React.FC<Props> = ({ data }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formattedDate = new Date(data.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });


  return (
    <>
    <ListItem className={classes.root} onClick={handleClickOpen}>
        {data.urlToImage && (
            <ListItemAvatar>
                <Avatar>{data.source.name.substring(0, 1)}</Avatar>
            </ListItemAvatar>
        )}
      <ListItemText
        primary={data.title}
        secondary={`${data.source.name} - ${formattedDate}`}
      />
    </ListItem>
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

export default NewsListItem;
