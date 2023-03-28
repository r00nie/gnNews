import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { ListItem, ListItemText, ListItemAvatar, Avatar } from "@material-ui/core";

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
      backgroundColor: theme.palette.background.paper,
      marginBottom: theme.spacing(1),
    },
  })
);

type Props = {
  data: NewsData;
};

const NewsListItem: React.FC<Props> = ({ data }) => {
  const classes = useStyles();

  return (
    <ListItem className={classes.root}>
      <ListItemAvatar>
        <Avatar>{data.source.name.substring(0, 1)}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={data.title}
        secondary={data.author || data.source.name}
      />
    </ListItem>
  );
};

export default NewsListItem;
