import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import { useSelector } from "react-redux";
import { AppState } from "../../types/globalTypes";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "static",
    bottom: 0,
    width: "100%",
    height: 100,
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  time: {
    marginLeft: theme.spacing(1),
    fontFamily: theme.typography.fontFamily,
    color: "white",
    fontWeight: "bold",
    fontSize: "20px",
  },
  text: {
    fontWeight: "bold",
    margin: theme.spacing(1),
  },
}));

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
