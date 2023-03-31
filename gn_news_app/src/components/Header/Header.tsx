import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Link, Button } from "@material-ui/core";
import {
  ViewList as ViewListIcon,
  ViewModule as ViewModuleIcon,
  Info,
  Menu,
} from "@material-ui/icons";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import HeaderDialog from "./HeaderDialog";
import { useDispatch, useSelector } from "react-redux";
import { AppState, HeaderProps } from "../../types/globalTypes";
import { toggleList } from "../../reducers";
import { Sidebar } from "../Sidebar";
import { routesData } from "../../data/routesData";
import { useStyles } from "./Header.styles";

const Header: React.FC<HeaderProps> = ({ title }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const isList = useSelector((state: AppState) => state.listVisibility);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const classes = useStyles();

  const handleSidebarToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    value: string | null
  ) => {
    if (value === "list") {
      dispatch(toggleList());
    } else {
      dispatch(toggleList());
    }
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Sidebar
          isOpen={isMenuOpen}
          onClose={handleSidebarToggle}
          menuItems={routesData}
        />
        <Button
          onClick={handleSidebarToggle}
          className={classes.menuIconButton}
        >
          <Menu className={classes.menuIcon} />
        </Button>
        <Typography
          variant="h6"
          component={Link}
          href="/"
          className={classes.title}
        >
          {title}
        </Typography>
        <ToggleButtonGroup
          orientation="horizontal"
          exclusive
          value={isList ? "list" : "module"}
          onChange={handleChange}
          className={classes.toggleButtonGroup}
        >
          <ToggleButton value="list" aria-label="list">
            <ViewListIcon />
          </ToggleButton>
          <ToggleButton value="module" aria-label="module">
            <ViewModuleIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        <Button onClick={handleOpen}>
          <Info />
        </Button>
        <HeaderDialog isOpen={open} onClose={handleClose} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
