import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
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
  },
  toolbar: theme.mixins.toolbar,
  listItemText: {
    marginLeft: theme.spacing(1),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  container: {
    display: "flex",
  },
}));

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: RouteData[];
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, menuItems }) => {
  const classes = useStyles();

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
          <ListItem button key={index}>
            <ListItemIcon>
              <ReactCountryFlag
                countryCode={item.countryCode}
                svg
                style={{ fontSize: "2em" }}
                title={item.country}
              />
            </ListItemIcon>
            <ListItemText primary={item.country} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
