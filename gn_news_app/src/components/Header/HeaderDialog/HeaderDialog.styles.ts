import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dialogTitle: {
      backgroundColor: theme.palette.primary.main,
      color: "#fff",
    },
    dialogContent: {
      fontSize: "1.2rem",
      padding: theme.spacing(2),
    },
    dialogActions: {
      margin: theme.spacing(1, 0),
      justifyContent: "flex-end",
    },
  })
);
