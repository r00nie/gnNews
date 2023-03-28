import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

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
      marginBottom: theme.spacing(2),
    },
    media: {
      width: 150,
      height: 150,
      objectFit: "cover",
    },
    content: {
      flex: "1 0 auto",
    },
    title: {
      fontSize: 18,
      fontWeight: 500,
      marginBottom: theme.spacing(1),
    },
    description: {
      fontSize: 14,
      color: theme.palette.text.secondary,
    },
  })
);

type Props = {
  data: NewsData;
};

const NewBlockItem: React.FC<Props> = ({ data }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {data.urlToImage && (
        <CardMedia
          className={classes.media}
          image={data.urlToImage}
          title={data.title}
        />
      )}
      <CardContent className={classes.content}>
        <Typography className={classes.title} variant="h6">
          {data.title}
        </Typography>
        <Typography className={classes.description} variant="body2">
          {data.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewBlockItem;
