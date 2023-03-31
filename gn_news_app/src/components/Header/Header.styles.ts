import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: theme.palette.primary.main,
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
      width: "100%",
      height: "75px",
    },
    toolbar: {
      height: "100%",
      display: "flex",
      flexShrink: 0,
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: theme.palette.primary.main,
    },
    title: {
      textDecoration: "none",
      color: "inherit",
      "&:hover": {
        textDecoration: "none",
      },
      fontFamily: theme.typography.fontFamily,
      fontWeight: "bold",
      fontSize: "25px",
      marginLeft: "25px",
    },
    toggleButtonGroup: {
      marginLeft: "auto",
      backgroundColor: "white",
    },
    menuIconButton: {
      backgroundColor: "white",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
      height: "40px",
      width: "40px",
    },
    menuIcon: {
      fontSize: "20px",
    },
  })
);
