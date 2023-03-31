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
    },
    toolbar: theme.mixins.toolbar,
    listItem: {
      margin: theme.spacing(1, 0),
      padding: theme.spacing(2),
      color: theme.palette.common.black,
      "&:hover": {
        backgroundColor: theme.palette.grey[500],
      },
      "&.active": {
        backgroundColor: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightBold,
      },
    },
    listItemIcon: {
      marginRight: 0,
    },
    listItemText: {
      marginLeft: theme.spacing(1),
    },
  })
);
