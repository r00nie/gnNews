import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "50px",
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    time: {
      marginLeft: theme.spacing(1),
    },
  })
);

const Footer: React.FC = () => {
  const classes = useStyles();
  const [currentTime, setCurrentTime] = React.useState<Date>(new Date());

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className={classes.root}>
      <Typography variant="body1">
        Current Time:
        <span className={classes.time}>
          {currentTime.toLocaleTimeString()}
        </span>
      </Typography>
    </footer>
  );
};

export default Footer;
