import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
      width: "95%",
      backgroundColor: theme.palette.background.paper,
      fontFamily: "Montserrat, sans-serif",
      fontSize: "1.2rem",
      color: "#333",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "20px auto",
      boxSizing: "border-box",
      borderRadius: "0.5rem",
    },
    text: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: "30px",
      margin: "30px",
      textAlign: "center",
      fontWeight: "bold",
      height: "50px",
    },
  })
);
