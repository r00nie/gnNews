import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const drawerWidth = 240;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: "white",
      padding: theme.spacing(0, 1),
    },
    toolbar: theme.mixins.toolbar,
    listItem: {
      margin: theme.spacing(1, 0),
      padding: theme.spacing(2),
      border: "1px solid #e0e0e0",
      color: theme.palette.common.black,
      "&:hover": {
        backgroundColor: theme.palette.grey[300],
        fontWeight: "bold",
      },
      "&.active": {
        backgroundColor: theme.palette.primary.main,
        fontWeight: "bold",
      },
    },
    listItemIcon: {
      marginRight: 0,
    },
    listItemText: {
      fontFamily: theme.typography.fontFamily,
      marginLeft: theme.spacing(1),
    },
    flag: {
      border: "1px solid #000000",
      padding: "3px",
      borderRadius: theme.spacing(3),
    },
  })
);
