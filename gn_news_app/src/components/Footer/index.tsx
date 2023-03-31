import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    height: 50,
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  time: {
    marginLeft: theme.spacing(1),
    fontFamily: theme.typography.fontFamily,
  },
}));

const Footer = () => {
  const classes = useStyles();
  const [currentTime, setCurrentTime] = React.useState(new Date());

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box component="footer" className={classes.root}>
      <Typography variant="body1">
        Current Time:
        <Box component="span" className={classes.time}>
          {currentTime.toLocaleTimeString()}
        </Box>
      </Typography>
    </Box>
  );
};

export default Footer;
