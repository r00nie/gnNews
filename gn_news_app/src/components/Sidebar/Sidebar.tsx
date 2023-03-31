import React from "react";
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
import { useStyles } from "./Sidebar.styles";

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
