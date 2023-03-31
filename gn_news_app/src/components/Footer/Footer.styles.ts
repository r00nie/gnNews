import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
  })
);
