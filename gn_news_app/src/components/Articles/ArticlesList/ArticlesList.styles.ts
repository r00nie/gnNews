import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "95%",
      backgroundColor: theme.palette.background.paper,
      fontFamily: "Montserrat, sans-serif",
      fontSize: "1.2rem",
      color: "#333",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "20px auto",
      padding: "10px",
      boxSizing: "border-box",
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
