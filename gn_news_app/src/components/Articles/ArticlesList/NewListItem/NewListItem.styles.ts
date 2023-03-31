import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "1rem",
      margin: "10px 10px",
      borderRadius: "0.5rem",
      backgroundColor: "#f7f7f7",
      border: "1px solid #e0e0e0",
      boxSizing: "border-box",
    },
  })
);
