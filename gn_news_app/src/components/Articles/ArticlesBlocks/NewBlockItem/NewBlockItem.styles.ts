import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      margin: theme.spacing(2),
      borderRadius: theme.spacing(2),
      boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.3)",
      transition: "transform 0.3s ease-in-out",
      "&:hover": {
        transform: "scale(1.05)",
      },
    },
    media: {
      width: 150,
      height: 150,
      objectFit: "cover",
      borderRadius: `${theme.spacing(2)}px 0 0 ${theme.spacing(2)}px`,
    },
    content: {
      flex: "1 0 auto",
      padding: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    title: {
      fontSize: 20,
      fontWeight: 500,
      marginBottom: theme.spacing(2),
      color: theme.palette.primary.main,
    },
    source: {
      fontSize: 14,
      color: theme.palette.secondary.main,
      marginBottom: theme.spacing(1),
      fontWeight: "bold",
    },
    description: {
      fontSize: 18,
      color: theme.palette.text.secondary,
      flexGrow: 1,
    },
  })
);
