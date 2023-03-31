import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { RouteData } from "../../data/routesData";
import ReactCountryFlag from "react-country-flag";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
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
}));

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: RouteData[];
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, menuItems }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleButtonClick = (route: string) => {
    navigate(route);
  };

  return (
    <Drawer
      open={isOpen}
      onClose={onClose}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.toolbar} />
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            button
            onClick={(): void => handleButtonClick(item.route)}
            key={index}
            className={classes.listItem}
          >
            <ListItemIcon className={classes.listItemIcon}>
              <ReactCountryFlag
                countryCode={item.countryCode}
                svg
                style={{ fontSize: "2em" }}
                title={item.country}
              />
            </ListItemIcon>
            <ListItemText
              primary={item.country}
              className={classes.listItemText}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
