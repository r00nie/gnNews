import React from "react";
import { Typography, Box } from "@material-ui/core";
import { useSelector } from "react-redux";
import { AppState } from "../../types/globalTypes";
import { useStyles } from "./Footer.styles";

const Footer = () => {
  const classes = useStyles();
  const [currentTime, setCurrentTime] = React.useState(new Date());
  const articles = useSelector((state: AppState) => state.articles);
  const articlesNumber = articles.length;

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box component="footer" className={classes.root}>
      <Typography variant="body1" className={classes.text}>
        Current number of articles:
        <Box component="span" className={classes.time}>
          {articlesNumber}
        </Box>
      </Typography>
      <Typography variant="body1" className={classes.text}>
        Current Time:
        <Box component="span" className={classes.time}>
          {currentTime.toLocaleTimeString()}
        </Box>
      </Typography>
    </Box>
  );
};

export default Footer;
